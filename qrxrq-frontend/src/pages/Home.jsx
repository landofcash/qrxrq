import { useState } from "react";
import ShortenForm from "@/components/ShortenForm";
import ShortUrlDisplay from "@/components/ShortUrlDisplay";

const Home = () => {
    const [shortUrl, setShortUrl] = useState("");

    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full">
            <ShortenForm  setShortUrl = {setShortUrl} />
            <ShortUrlDisplay shortUrl={shortUrl} />
        </div>
    );
};

export default Home;
