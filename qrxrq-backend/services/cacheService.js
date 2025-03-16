class CacheService {
    async init(key) {

    }
    async clear(key) {

    }
    async get(key) {
        throw new Error("get() method not implemented");
    }

    async set(key, value, options = {}) {
        throw new Error("set() method not implemented");
    }
}

module.exports = CacheService;
