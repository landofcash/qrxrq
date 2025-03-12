const request = require("supertest");
const app = require("./testSetup"); // Import shared setup

describe("Shorten URL API", () => {
    it("should return a shortened URL", async () => {
        await request(app)
            .post("/shorten")
            .send({ originalUrl: "https://example.com" })
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((res) => {
                if (!res.body.shortUrl.match(new RegExp(`${process.env.DOMAIN}/\\w+`))) {
                    throw new Error("Shortened URL format is incorrect");
                }
            });
    });

    it("should return an error if no URL is provided", async () => {
        await request(app)
            .post("/shorten")
            .send({})
            .expect(400)
            .expect("Content-Type", /json/)
            .expect({ error: "URL is required" });
    });
});
