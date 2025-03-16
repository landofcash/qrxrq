const Url = require("../models/Url");
const cache = require("../services/cacheFactory");

// Redirect to original URL and track stats
const redirectUrl = async (req, res) => {
    const referrer = req.get("Referer") || "Direct";
    const { shortId } = req.params;

    try {
        let originalUrl = await cache.get(shortId);

        if (!originalUrl) {
            const url = await Url.findOne({ shortId });
            if (!url) return res.status(404).json({ error: "Not found" });
            originalUrl = url.originalUrl;
            await cache.set(shortId, originalUrl, { EX: 86400 });
        }

        await Url.updateOne(
            { shortId },
            {
                $inc: {
                    redirectCount: 1,
                    [`referrerStats.${referrer}`]: 1
                }
            }
        );

        res.redirect(originalUrl);
    } catch (err) {
        console.error("Redirect Error:", err);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { redirectUrl };
