const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, unique: true },  // Changed from Number to String
    redirectCount: { type: Number, default: 0 },
    referrerStats: { type: Map, of: Number, default: {} },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Url", UrlSchema);
