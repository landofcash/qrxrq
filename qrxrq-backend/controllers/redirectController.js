const Url = require("../models/Url");
const { redisClient } = require("../config/redis");

// Redirect to original URL and track stats
const redirectUrl = async (req, res) => {
    const referrer = req.get("Referer") || "Direct";
    const { shortId } = req.params;

    try {
        let originalUrl = await redisClient.get(shortId);
        if (!originalUrl) {
            const url = await Url.findOne({ shortId });
            if (!url) return res.status(404).json({ error: "Not found" });

            url.redirectCount = (url.redirectCount || 0) + 1;
            url.referrerStats = url.referrerStats || {};
            url.referrerStats[referrer] = (url.referrerStats[referrer] || 0) + 1;
            await url.save();

            originalUrl = url.originalUrl;
            await redisClient.set(shortId, originalUrl, "EX", 86400);
        }

        res.redirect(originalUrl);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { redirectUrl };
