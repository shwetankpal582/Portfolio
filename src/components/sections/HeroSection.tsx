import { ChevronDown, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Image with enhanced effects */}
            <div className="relative animate-fade-in group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-3xl opacity-40 animate-glow group-hover:opacity-60 transition-opacity" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
                <img
                  src={profileImage}
                  alt="Shwetank Pal"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Shwetank Pal</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Frontend Engineer & UI/UX Designer
                </p>
              </div>

              {/* Micro-badges with enhanced styling */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["React", "Tailwind", "Frontend Engineering"].map((skill) => (
                  <span
                    key={skill}
                    className="glass px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl lg:max-w-3xl">
                I'm a results-driven Frontend Web Developer with a strong computer science foundation 
                and hands-on experience building scalable, responsive, and business-focused web applications. 
                Skilled in ReactJS, modern CSS (Tailwind), and UI/UX prototyping.
              </p>

              {/* Quick Stats with glass cards */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                {[
  { label: "Education", value: "BCA, MSI (2025)" },
  { label: "Experience", value: "Web Dev Intern" },
  { label: "UI/UX", value: "Design", src: "https://drive.google.com/drive/folders/19YZg0fKOVCFZ0ga-z6HHcXwRyGS0KvWY" },
].map((stat) => (
  stat.src ? (
    <a
      key={stat.label}
      href={stat.src}
      target="_blank"
      rel="noopener noreferrer"
      className="glass px-4 py-3 rounded-xl text-center md:text-left border border-white/5 hover:border-primary/30 transition-colors hover:shadow-lg hover:scale-105 transform duration-300"
    >
      <p className="text-xs text-foreground/60 uppercase tracking-wider">{stat.label}</p>
      <p className="font-semibold mt-1 text-primary">{stat.value}</p>
    </a>
  ) : (
    <div
      key={stat.label}
      className="glass px-4 py-3 rounded-xl text-center md:text-left border border-white/5 hover:border-primary/30 transition-colors hover:shadow-lg"
    >
      <p className="text-xs text-foreground/60 uppercase tracking-wider">{stat.label}</p>
      <p className="font-semibold mt-1">{stat.value}</p>
    </div>
  )
))}

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-0.5 transition-all duration-300 ease-out shadow-lg" onClick={() => scrollToSection('projects')}>
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Portfolio
                </Button>
                <Button size="lg" variant="outline" className="group border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-colors transform hover:-translate-y-0.5 duration-300 ease-out" asChild>
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
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
        aria-label="Scroll to About section"
      >
         <ChevronDown className="w-8 h-8 text-primary" /> 
      </button>
    </section>
  );
};
