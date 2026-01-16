
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay to prevent layout shift or immediate intrusion
            const timer = setTimeout(() => setShow(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "true");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border z-50 animate-fade-in-up">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/80 text-center md:text-left">
                    We use cookies to enhance your experience and analyze our traffic.
                    By continuing to visit this site you agree to our use of cookies.
                </p>
                <div className="flex gap-2">
                    <Button size="sm" onClick={accept}>
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
};
