import api from "../api/axios";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ShortenForm = ({ setShortUrl }) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            setError("Please enter a valid URL");
            return;
        }
        setError("");
        setLoading(true);
        try {
            const response = await api.post("/shorten", {originalUrl: url});
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            setError(`Error shortening URL: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full relative p-2">
            {loading && (
                <div className="absolute inset-0 bg-green-100/60 flex items-center justify-center rounded-md z-10">
                    <svg className="animate-spin h-10 w-10 text-green-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
                    </svg>
                </div>
            )}

            <form onSubmit={handleSubmit} className={`flex flex-col gap-2 ${loading ? "pointer-events-none" : ""}`}>
                <Label htmlFor="urlInput" className="text-(--color-foreground)  font-medium">
                    Enter URL to Shorten
                </Label>
                <Textarea
                    id="urlInput"
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full min-h-[6rem] bg-background border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full hover:cursor-pointer">
                    Shorten URL
                </Button>
            </form>
        </div>
    );
};

export default ShortenForm;
