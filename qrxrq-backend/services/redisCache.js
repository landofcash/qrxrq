const CacheService = require("./cacheService");
const { redisClient, connectRedis } = require("../config/redis");

class RedisCache extends CacheService {
    async init() {
        try {
            await connectRedis();
            console.log("Redis connection initialized.");
        } catch (err) {
            console.error("Redis connection failed:", err);
        }
    }
    async clear(){
        await redisClient.disconnect();
    }
    async get(key) {
        if (!redisClient.isReady) {
            console.warn("Redis is not connected. Falling back to database.");
            return null;
        }

        try {
            return redisClient.get(key);
        } catch (err) {
            console.error("Redis GET error:", err);
            return null;
        }
    }

    async set(key, value, options = {}) {
        if (!redisClient.isReady) {
            console.warn("Redis is not connected.");
            return null;
        }

        try {
            const expiry = Number(options.EX) || 86400; // Default expiry: 1 day
            await redisClient.set(key, value, { EX: expiry });
        } catch (err) {
            console.error("Redis SET error:", err);
        }
    }
}

module.exports = new RedisCache();
