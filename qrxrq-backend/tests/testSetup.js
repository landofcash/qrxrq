const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const dotenv = require("dotenv");
const cache = require("../services/cacheFactory");

dotenv.config();

// Import routes & Redis
const routes = require("../routes/routes");

const app = express();
app.use(express.json());
app.use("", routes);

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    await cache.init();
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
    await cache.clear();
});

module.exports = app;
