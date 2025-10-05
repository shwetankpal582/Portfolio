import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects = [
    {
      title: "CodeDevForge",
      description: "Full-stack blog application with rich text editor, user authentication, and real-time updates. Built with modern web technologies for optimal performance.",
      techStack: ["ReactJS", "Tailwind CSS", "NodeJS", "Express", "MongoDB"],
      repoLink: "http://bit.ly/CodeDevForge",
      liveLink: "",
      category: "fullstack"
    },
    {
      title: "Application Tracker System (ATS)",
      description: "Comprehensive ATS web application for managing resumes, job applications, and project tracking with intuitive UI and smart filtering.",
      techStack: ["React", "TypeScript", "Tailwind", "REST API"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "frontend"
    },
    {
      title: "Cryptoscope",
      description: "Cryptocurrency analysis and visualization platform with real-time data, interactive charts, and market insights.",
      techStack: ["React", "Chart.js", "Crypto API", "Tailwind"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "frontend"
    },
    {
      title: "Ecommerce Platform",
      description: "Full-featured MERN stack e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      repoLink: "https://bit.ly/Ecomerce",
      liveLink: "",
      category: "fullstack"
    },
    {
      title: "Cloud Mock Website",
      description: "Modern cloud services landing page featuring responsive design, smooth animations, and compelling call-to-actions.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "frontend"
    },
    {
      title: "Primetrade.ai",
      description: "Trading platform with real-time dashboards, interactive charts, and data visualization for financial analytics.",
      techStack: ["React", "D3.js", "Tailwind", "WebSocket"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "frontend"
    },
    {
      title: "Sundown (Clone)",
      description: "Pixel-perfect recreation of Sundown Studio's website, demonstrating advanced CSS skills and attention to detail.",
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "uiux"
    },
    {
      title: "Toggle Button Darkweb",
      description: "Interactive UI component library featuring custom toggle switches and dark mode implementation with smooth transitions.",
      techStack: ["React", "CSS3", "JavaScript", "UI Components"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "uiux"
    },
    {
      title: "Dislapharm (Assignment)",
      description: "Pharmaceutical company website assignment showcasing clean UI design, information architecture, and accessibility standards.",
      techStack: ["React", "Tailwind", "Figma", "UI/UX"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: "",
      category: "uiux"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "uiux", label: "UI/UX" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Projects
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A showcase of my frontend development work, from full-stack applications to UI components
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`glass px-6 py-3 rounded-full font-medium transition-all ${
                  filter === cat.id 
                    ? "bg-primary/20 border-2 border-primary text-primary scale-105" 
                    : "border border-white/10 hover:border-primary/30 hover:scale-105"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  repoLink={project.repoLink}
                  liveLink={project.liveLink}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="glass-strong rounded-3xl p-12 text-center space-y-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold">Interested in Working Together?</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These projects demonstrate my commitment to quality code and user-centered design. 
              Let's discuss how I can contribute to your team or project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
