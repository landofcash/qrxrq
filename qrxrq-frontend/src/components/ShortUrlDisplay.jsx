import { useState } from "react";
import { Button } from "@/components/ui/button";

const ShortUrlDisplay = ({ shortUrl }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        }
    };

    if (!shortUrl) return null; // Hide component if no URL is provided

    return (
        <div className="w-full flex flex-col items-center gap-3 text-center">
            <p className="text-[var(--color-foreground)] text-sm">Your shortened URL:</p>
            <div className="bg-[var(--color-background)] border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md w-full break-all">
                {shortUrl}
            </div>
            <Button onClick={handleCopy} className="w-full">
                {copied ? "Copied!" : "Copy Link"}
            </Button>
        </div>
    );
};

export default ShortUrlDisplay;
