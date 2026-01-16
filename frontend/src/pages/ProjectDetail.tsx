
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Mock data - in a real app this would come from an API or a shared data file
const projects = [
    {
        id: "1",
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing.",
        longDescription: "This project was built to address the needs of small to medium-sized e-commerce businesses. It provides a centralized hub for tracking sales, managing stock levels, and processing customer orders. The dashboard is fully responsive and supports dark mode.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "2",
        title: "AI Content Generator",
        description: "An AI-powered application that helps users generate blog posts, social media captions, and marketing copy.",
        longDescription: "Leveraging the OpenAI API, this application allows users to input prompts and receive high-quality text content. It includes features for saving drafts, editing generated text, and exporting to various formats.",
        tech: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "3",
        title: "Health & Wellness App",
        description: "A mobile-first web application for tracking fitness goals, nutrition, and mental well-being.",
        longDescription: "This app helps users stay on top of their health goals by providing tools for tracking workouts, logging meals, and monitoring mood. It features data visualization to show progress over time and includes a social aspect for sharing achievements.",
        tech: ["React Native", "Expo", "Firebase", "Redux"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        liveUrl: "#",
        githubUrl: "#"
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-colitems-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Button asChild>
                    <Link to="/projects">Back to Projects</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                        <Link to="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </Button>

                    <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
                        <div className="space-y-6">
                            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="flex-1" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 w-4 h-4" />
                                        Live Demo
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="flex-1 glass" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 w-4 h-4" />
                                        Source Code
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-foreground/80 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Overview</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.longDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full glass text-sm font-medium border border-primary/20 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
