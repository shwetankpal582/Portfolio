import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "CodeDevForge",
      description: "Full-stack blog application with rich text editor, user authentication, and real-time updates. Built with modern web technologies for optimal performance.",
      techStack: ["ReactJS", "Tailwind CSS", "NodeJS", "Express", "MongoDB"],
      repoLink: "http://bit.ly/CodeDevForge",
      liveLink: ""
    },
    {
      title: "Application Tracker System (ATS)",
      description: "Comprehensive ATS web application for managing resumes, job applications, and project tracking with intuitive UI and smart filtering.",
      techStack: ["React", "TypeScript", "Tailwind", "REST API"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: ""
    },

    {
      title: "Sundown (Clone)",
      description: "Pixel-perfect recreation of Sundown Studio's website, demonstrating advanced CSS skills and attention to detail.",
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: ""
    },
    {
      title: "Toggle Button Darkweb",
      description: "Interactive UI component library featuring custom toggle switches and dark mode implementation with smooth transitions.",
      techStack: ["React", "CSS3", "JavaScript", "UI Components"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: ""
    },
    {
      title: "Dislapharm (Assignment)",
      description: "Pharmaceutical company website assignment showcasing clean UI design, information architecture, and accessibility standards.",
      techStack: ["React", "Tailwind", "Figma", "UI/UX"],
      repoLink: "https://github.com/shwetankpal582",
      liveLink: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Projects
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A showcase of my frontend development work, from full-stack applications to UI components
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  repoLink={project.repoLink}
                  liveLink={project.liveLink}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="glass-strong rounded-3xl p-12 text-center space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                These projects demonstrate my commitment to quality code and user-centered design. 
                Let's discuss how I can contribute to your team or project.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

