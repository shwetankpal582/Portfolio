import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects = [
  {
    "title": "CodeDevForge",
    "description": "Full-stack blog application with rich text editor, user authentication, and real-time updates. Built with modern web technologies for optimal performance.",
    "techStack": ["ReactJS", "Tailwind CSS", "NodeJS", "Express", "MongoDB", "JWT", "Socket.io"],
    "repoLink": "https://github.com/shwetankpal582/CodeDevForge",
    "liveLink": "https://code-dev-forge.vercel.app/",
    "category": "fullstack",
    "image": "/placeholder.svg"
  },
  {
    "title": "Application Tracker System (ATS)",
    "description": "Comprehensive ATS web application for managing resumes, job applications, and project tracking with intuitive UI and smart filtering.",
    "techStack": ["React", "TypeScript", "Tailwind", "REST API", "Axios", "Formik", "Yup"],
    "repoLink": "https://github.com/shwetankpal582/Applicant-Tracking-System",
    "liveLink": "https://applicant-tracking-system-omega.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "Cryptoscope",
    "description": "Cryptocurrency analysis and visualization platform with real-time data, interactive charts, and market insights.",
    "techStack": ["React", "Chart.js", "Crypto API", "Tailwind", "Axios", "Redux", "React Router"],
    "repoLink": "https://github.com/shwetankpal582/Cryptoscope",
    "liveLink": "https://cryptoscope-six.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "Ecommerce Platform",
    "description": "Full-featured MERN stack e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
    "techStack": ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux", "JWT", "Axios"],
    "repoLink": "https://github.com/shwetankpal582/Ecommerce",
    "liveLink": "https://ecommerce-ruddy-mu.vercel.app/",
    "category": "fullstack",
    "image": "/placeholder.svg"
  },
  {
    "title": "Cloud Mock Website",
    "description": "Modern cloud services landing page featuring responsive design, smooth animations, and compelling call-to-actions.",
    "techStack": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GSAP", "ScrollMagic", "Figma"],
    "repoLink": "https://github.com/shwetankpal582/Cloud-Mock",
    "liveLink": "https://cloud-mock-eosin.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "Primetrade.ai",
    "description": "Trading platform with real-time dashboards, interactive charts, and data visualization for financial analytics.",
    "techStack": ["React", "D3.js", "Tailwind", "WebSocket", "Redux", "Chart.js", "Axios"],
    "repoLink": "https://github.com/shwetankpal582/Primetrade.ai",
    "liveLink": "https://primetrade-phi.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "Sundown (Clone)",
    "description": "Pixel-perfect recreation of Sundown Studio's website, demonstrating advanced CSS skills and attention to detail.",
    "techStack": ["HTML", "CSS", "JavaScript", "GSAP", "ScrollMagic", "Figma", "Responsive Design"],
    "repoLink": "https://github.com/shwetankpal582/Sundown-Studio",
    "liveLink": "https://sundown-studio-eta.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "Toggle Button Darkweb",
    "description": "Interactive UI component library featuring custom toggle switches and dark mode implementation with smooth transitions.",
    "techStack": ["React", "CSS3", "JavaScript", "UI Components", "Tailwind", "Storybook", "Framer Motion"],
    "repoLink": "https://github.com/shwetankpal582/Toggle-Button-Dark-Mode",
    "liveLink": "https://toggle-button-dark-mode.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
  },
  {
    "title": "CellStart",
    "description": "Pharmaceutical company website assignment showcasing clean UI design, information architecture, and accessibility standards.",
    "techStack": ["React", "Tailwind", "Figma", "UI/UX", "JavaScript", "Axios", "Framer Motion"],
    "repoLink": "https://github.com/shwetankpal582/CellStart",
    "liveLink": "https://cell-start-one.vercel.app/",
    "category": "frontend",
    "image": "/placeholder.svg"
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
                  image={project.image}
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
