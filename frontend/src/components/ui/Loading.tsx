
import { Skeleton } from "@/components/ui/skeleton";

export const Loading = () => {
    return (
        <div className="w-full h-full p-4 space-y-4">
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
            </div>
        </div>
    );
};

export const LoadingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <div className="relative bg-primary w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground font-bold animate-pulse">
                        SP
                    </div>
                </div>
                <p className="text-muted-foreground animate-pulse">Loading...</p>
            </div>
        </div>
    )
}
