import ContactUsForm from "@/components/ContactUsForm.jsx";
import shadcn from "@/assets/shadcn.svg";
import azure from "@/assets/azure.svg";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center text-xs text-[var(--color-foreground)]">
            <div className="w-full max-w-md max-h-80 overflow-y-auto">
                <p className="mb-4 text-sm">
                    QRXRQ is a modern, fast, and secure URL shortener designed to simplify link management. Open source.
                </p>
                <h2 className="text-sm font-semibold mb-2">🛠 Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                    {/* Frontend Technologies */}
                    <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React" />
                    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                    <img src={`https://img.shields.io/badge/ShadCN-0A0A0A?style=flat&logoColor=white&logo=data:image/svg%2bxml;base64,${btoa(window.location.origin+'/'+shadcn)}`} alt="ShadCN" />
                    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {/* Backend Technologies */}
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js" />
                    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
                    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Redis" />
                    <img src={`https://img.shields.io/badge/Azure-0089D6?style=azure&logoColor=white&logo=data:image/svg%2bxml;base64,${btoa(window.location.origin+'/'+azure)}`} alt="Azure" />
                </div>
                <ContactUsForm/>
            </div>
        </div>
    );
};

export default About;
