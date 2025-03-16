require("dotenv").config(); // Load environment variables
const redisCache = require("./redisCache");
const memoryCache = require("./memoryCache");

const cacheType = process.env.CACHE_TYPE || "memory"; // Default to "memory" if not set

let cache;

if (cacheType === "redis") {
    console.log("Using Redis Cache");
    cache = redisCache;
} else {
    console.log("Using In-Memory Cache");
    cache = memoryCache;
}
module.exports = cache;
