const { redisClient } = require("../config/redis");

const getNextId = async () => {
    const key = "lastId";
    let lastId = await redisClient.get(key);
    lastId = lastId ? parseInt(lastId) + 1 : 1000;
    await redisClient.set(key, lastId);
    return String(lastId);
};

module.exports = { getNextId };
