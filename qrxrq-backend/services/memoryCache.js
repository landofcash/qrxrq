const CacheService = require("./cacheService");

class MemoryCache extends CacheService {
    constructor() {
        super();
        this.cache = new Map();
        this.timeouts = new Map(); // Track timeouts for cache expiration
    }

    async get(key) {
        return this.cache.get(key) || null;
    }

    async set(key, value, options = {}) {
        this.cache.set(key, value);

        if (options.EX) {
            // Clear previous timeout if key is re-set
            if (this.timeouts.has(key)) {
                clearTimeout(this.timeouts.get(key));
            }

            // Set new timeout
            const timeout = setTimeout(() => {
                this.cache.delete(key);
                this.timeouts.delete(key);
            }, options.EX * 1000);

            this.timeouts.set(key, timeout);
        }
    }

    async clear() {
        this.cache.clear();

        // Clear all pending timeouts
        for (const timeout of this.timeouts.values()) {
            clearTimeout(timeout);
        }

        this.timeouts.clear();
        console.log("In-memory cache cleared.");
    }
}

module.exports = new MemoryCache();
