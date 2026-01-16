
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
    {
        title: "Understanding React Server Components",
        excerpt: "A deep dive into how RSCs change the way we build React applications.",
        date: "Dec 12, 2025",
        link: "#",
        tag: "React"
    },
    {
        title: "Mastering Tailwind CSS for Scalable Design",
        excerpt: "Best practices for organizing and maintaining Tailwind projects.",
        date: "Nov 28, 2025",
        link: "#",
        tag: "CSS"
    },
    {
        title: "Building Accessible Web Forms",
        excerpt: "Ensuring your forms are usable by everyone, regardless of ability.",
        date: "Oct 15, 2025",
        link: "#",
        tag: "Accessibility"
    }
];

export const Articles = () => {
    return (
        <section id="articles" className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                        Latest Articles
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Thoughts and insights on web development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {articles.map((article, index) => (
                        <a key={index} href={article.link} className="group block h-full">
                            <div className="glass p-6 h-full rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                                <div className="flex items-center gap-2 text-primary mb-4">
                                    <BookOpen className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">{article.tag}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-white/5">
                                    <span>{article.date}</span>
                                    <span className="group-hover:translate-x-1 transition-transform">Read more →</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" className="glass">See all articles</Button>
                </div>
            </div>
        </section>
    );
};
