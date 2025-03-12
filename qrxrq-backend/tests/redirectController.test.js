const request = require("supertest");
const app = require("./testSetup"); // Import shared setup
const Url = require("../models/Url");

describe("Redirect URL API", () => {
    it("should redirect to the original URL", async () => {
        // Insert test data
        const url = new Url({
            originalUrl: "https://example.com",
            shortId: "1234"
        });
        await url.save();

        await request(app)
            .get("/1234")
            .expect(302)
            .expect("Location", "https://example.com");
    });

    it("should return 404 if shortId does not exist", async () => {
        await request(app)
            .get("/9999")
            .expect(404)
            .expect("Content-Type", /json/)
            .expect({error: "Not found"});
    });
});
