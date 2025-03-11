import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="w-full flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold dark:text-white">QRXRQ</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300 font-mono">URL SHORTENER</h2>
            <nav>
                <ul className="flex gap-4 text-blue-800 dark:text-blue-200 underline font-mono">
                    <li>
                        <Link to="/" className="hover:font-bold">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:font-bold">About</Link>
                    </li>
                    <li>
                        {/* Dark Mode Toggle as Text Icon */}
                        <button onClick={() => setDarkMode(!darkMode)}
                                className="hover:font-bold hover:cursor-pointer">
                            {darkMode ? "🌙" : "☀️"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
