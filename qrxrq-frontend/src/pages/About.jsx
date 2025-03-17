import ContactUsForm from "@/components/ContactUsForm.jsx";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center text-xs text-[var(--color-foreground)]">
            <div className="w-full max-w-md max-h-80 overflow-y-auto">
                <p className="mb-4 text-sm">
                    QRXRQ is a modern, fast, and secure URL shortener designed to simplify link management. <a className="text-blue-500 dark:text-blue-200 font-bold hover:underline" href="https://https://github.com/landofcash/qrxrq"  title="QRXRQ github repo">Open source on Github</a>.
                </p>
                <h2 className="text-sm font-semibold mb-2">🛠 Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                    {/* Frontend Technologies */}
                    <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React" />
                    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                    <img src={`https://img.shields.io/badge/ShadCN-0A0A0A?style=flat&logoColor=white&logo=shadcn/ui`} alt="ShadCN" />
                    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {/* Backend Technologies */}
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js" />
                    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
                    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Redis" />
                    <img src="https://img.shields.io/badge/Azure-0089D6?style=flat&logo=data:image/svg%2bxml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+CiAgPHBhdGggZD0iTTExOC40MzIgMTg3LjY5OGMzMi44OS01LjgxIDYwLjA1NS0xMC42MTggNjAuMzY3LTEwLjY4NGwuNTY4LS4xMi0zMS4wNTItMzYuOTM1Yy0xNy4wNzgtMjAuMzE0LTMxLjA1MS0zNy4wMTQtMzEuMDUxLTM3LjExIDAtLjE4MiAzMi4wNjMtODguNDc3IDMyLjI0My04OC43OTIuMDYtLjEwNSAyMS44OCAzNy41NjcgNTIuODkzIDkxLjMyIDI5LjAzNSA1MC4zMjMgNTIuOTczIDkxLjgxNSA1My4xOTUgOTIuMjAzbC40MDUuNzA3LTk4LjY4NC0uMDEyLTk4LjY4NC0uMDEzek0wIDE3Ni40MzVjMC0uMDUyIDE0LjYzMS0yNS40NTEgMzIuNTE0LTU2LjQ0MmwzMi41MTQtNTYuMzQ3IDM3Ljg5MS0zMS43OTlDMTIzLjc2IDE0LjM1OCAxNDAuODY3LjAyNyAxNDAuOTM1LjAwMWMuMDY5LS4wMjYtLjIwNS42NjQtLjYwOSAxLjUzNHMtMTguOTE5IDQwLjU4Mi00MS4xNDUgODguMjVsLTQwLjQxIDg2LjY3LTI5LjM4Ni4wMzdjLTE2LjE2Mi4wMi0yOS4zODUtLjAwNS0yOS4zODUtLjA1NyIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K" alt="Azure" />
                </div>
                <ContactUsForm/>
            </div>
        </div>
    );
};

export default About;
