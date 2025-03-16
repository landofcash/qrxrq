const Url = require("../models/Url");
const { generateShortId } = require("../utils/idGenerator");

const shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) return res.status(400).json({ error: "URL is required" });

    try {
        let url = await Url.findOne({ originalUrl: originalUrl.trim() });
        if (url) return res.json({ shortUrl: `${process.env.DOMAIN}/${url.shortId}` });

        const shortId = generateShortId();
        url = new Url({ originalUrl, shortId });
        await url.save();

        res.json({ shortUrl: `${process.env.DOMAIN}/${shortId}` });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { shortenUrl };

