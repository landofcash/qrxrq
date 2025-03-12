const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const dotenv = require("dotenv");

dotenv.config();

// Import routes & Redis
const routes = require("../routes/routes");
const { connectRedis, redisClient } = require("../config/redis");

const app = express();
app.use(express.json());
app.use("/api/url", routes);

let mongoServer;

beforeAll(async () => {
    // Start an in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    // Connect to Redis
    await connectRedis();
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
    await redisClient.quit();
});

module.exports = app;
