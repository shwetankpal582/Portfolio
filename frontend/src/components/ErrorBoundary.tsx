
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background p-4">
                    <div className="glass-strong p-8 rounded-2xl max-w-md text-center space-y-4">
                        <h2 className="text-2xl font-bold text-destructive">Something went wrong.</h2>
                        <p className="text-foreground/70">
                            We're sorry, but an unexpected error occurred.
                        </p>
                        <p className="text-xs text-muted-foreground bg-secondary/20 p-2 rounded">
                            {this.state.error?.message}
                        </p>
                        <Button onClick={() => window.location.reload()}>
                            Refresh Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
