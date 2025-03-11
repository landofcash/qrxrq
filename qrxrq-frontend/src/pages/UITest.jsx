import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UITest = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 bg-background">
            <div className="bg-blue-500 text-white p-4">
                If this is blue, Tailwind is working!
            </div>
            <Card className="w-full sm:w-[400px] shadow-md rounded-lg px-6 py-4">
                <CardContent className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground text-center">UI Components Test</h2>

                    <div className="space-y-2">
                        <Label htmlFor="test-input" className="text-foreground font-medium">Test Input</Label>
                        <Input id="test-input" type="text" placeholder="Enter text..." className="w-full" />
                    </div>

                    <Button className="w-full">Test Button</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default UITest;
