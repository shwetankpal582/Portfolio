import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  image?: string;
}

export const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  repoLink,
  liveLink,
  image,
}: ProjectCardProps) => {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">

      {/* Perfectly Scaled Windowed Preview */}
      <div className="relative overflow-hidden rounded-t-2xl bg-muted aspect-[16/9]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : liveLink ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Core trick: actual full-size iframe scaled down proportionally */}
            <div className="absolute w-[200%] h-[200%] origin-center scale-[0.5] pointer-events-none">
              <iframe
                src={liveLink}
                title={title}
                loading="lazy"
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            </div>
          </div>
        ) : (
          <img
            src="/placeholder.svg"
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold gradient-text text-foreground">{title}</h3>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              Repo
            </a>
          </Button>

          {liveLink ? (
            <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                Live
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1" disabled>
              Not Deployed
            </Button>
          )}

          {/* <Button size="sm" className="flex-1" asChild>
            <Link to={`/projects/${id}`}>
              Details
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
