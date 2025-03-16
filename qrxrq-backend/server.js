const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes/routes");
const cache = require("./services/cacheFactory");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB & Redis before starting the server
(async () => {
    try {
        await connectDB();
        await cache.init();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to DB or Redis", err);
        process.exit(1); // Exit if DB connection fails
    }
})();

// Use routes
app.use("/", routes);
