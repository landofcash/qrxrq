import { HashRouter as Router } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import AppRoutes from "@/routes.jsx";

function App() {
    return (
        <Router>
            <div className="flex items-center justify-center min-h-screen p-4">
                <Card className="w-full max-w-md p-6 shadow-md rounded-lg bg-(--color-background) text-(--color-foreground)">
                    <Header />
                    <AppRoutes />
                </Card>
            </div>
        </Router>
    );
}

export default App;
