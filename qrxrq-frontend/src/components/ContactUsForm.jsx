const ContactUsForm = () => {
    return (
        <div className="mt-4 p-2 bg-gray-50 border border-gray-300 rounded-md text-xs text-gray-800">
            <h2 className="text-sm font-semibold mb-2">📩 Contact</h2>
            <p className="mb-2">Interested in collaborating or hiring? Reach out via:</p>
            <ul className="space-y-2">
                <li>
                    <div className="flex items-center space-x-2">
                        <img
                            src="upwork-favicon.ico"
                            alt="Upwork"
                            className="w-4 h-4"
                        />
                        <span>Upwork: </span>
                        <a href="https://www.upwork.com/freelancers/mikhaila"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">
                            upwork.com/freelancers/mikhaila
                        </a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center space-x-2">
                        <img
                            src="github-favicon.ico"
                            alt="GitHub"
                            className="w-4 h-4"
                        />
                        <span>GitHub: </span>
                        <a href="https://github.com/landofcash"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">
                            github.com/landofcash
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactUsForm;
