const crypto = require("crypto");

function generateShortId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(); // Unix timestamp (seconds)
    const salt = crypto.randomBytes(2).toString("hex"); // 2-byte random salt (4 hex chars)

    // Generate SHA-1 hash of (timestamp + salt)
    const hash = crypto.createHash("sha1").update(timestamp + salt).digest("hex");

    // Extract the first 8 hex characters and convert to Base36 for shorter output
    return parseInt(hash.substring(0, 8), 16).toString(36).toLowerCase();
}

module.exports = { generateShortId };
