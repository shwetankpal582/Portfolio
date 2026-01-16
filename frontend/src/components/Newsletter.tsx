
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setEmail("");
            toast({
                title: "Subscribed!",
                description: "You've successfully subscribed to the newsletter.",
            });
        }, 1500);
    };

    return (
        <div className="glass-strong p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold gradient-text">Subscribe to Newsletter</h3>
            <p className="text-sm text-muted-foreground">
                Get the latest updates on articles, projects, and more.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background/50"
                />
                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Subscribing..." : "Subscribe"}
                </Button>
            </form>
        </div>
    );
};
