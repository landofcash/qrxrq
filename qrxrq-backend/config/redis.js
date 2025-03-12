const redis = require("redis");

const redisClient = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: process.env.REDIS_PORT || 6379,
        tls: process.env.REDIS_TLS === "true"
    },
    password: process.env.REDIS_KEY,
});

redisClient.on("error", (err) => console.error("Redis error:", err));

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log("Redis connected");
    } catch (err) {
        console.error("Redis connection error:", err);
    }
};

module.exports = { redisClient, connectRedis };
