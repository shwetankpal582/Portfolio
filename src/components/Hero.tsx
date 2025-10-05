import { ChevronDown, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow" />
              <img
                src={profileImage}
                alt="Shwetank Pal"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                  Shwetank Pal
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Frontend Engineer & UI/UX Designer
                </p>
              </div>

              {/* Micro-badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["React", "Tailwind", "Frontend Engineering"].map((skill) => (
                  <span
                    key={skill}
                    className="glass px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                I'm a results-driven Frontend Web Developer with a strong computer science foundation 
                and hands-on experience building scalable, responsive, and business-focused web applications. 
                Skilled in ReactJS, modern CSS (Tailwind), and UI/UX prototyping.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-foreground/60">Education</p>
                  <p className="font-semibold">BCA, MSI (2025)</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-foreground/60">Experience</p>
                  <p className="font-semibold">Web Dev Intern</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-foreground/60">CGPA</p>
                  <p className="font-semibold">8.88</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/projects">
                    <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Portfolio
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
