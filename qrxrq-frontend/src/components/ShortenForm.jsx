import api from "../api/axios";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ShortenForm = ({ setShortUrl }) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            setError("Please enter a valid URL");
            return;
        }
        setError("");
        try {
            const response = await api.post("/shorten", {originalUrl: url});
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            setError(`Error shortening URL: ${error}`);
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
