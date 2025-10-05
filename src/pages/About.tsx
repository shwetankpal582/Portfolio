import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const skills = [
    "ReactJS", "JavaScript", "TypeScript", "HTML5", "CSS3",
    "Tailwind CSS", "Bootstrap", "Figma", "Git", "GitHub",
    "Responsive Design", "UI/UX Design", "RESTful APIs"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                About Me
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A passionate frontend developer dedicated to crafting exceptional digital experiences
              </p>
            </div>

            {/* Bio Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20" />
                <img
                  src={profileImage}
                  alt="Shwetank Pal"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Professional Journey</h2>
                
                <p className="text-foreground/80 leading-relaxed">
                  I'm Shwetank Pal, a results-driven Frontend Web Developer with a strong foundation 
                  in computer science and hands-on experience building scalable, responsive, and 
                  business-focused web applications.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  My expertise lies in creating intuitive user interfaces with ReactJS, implementing 
                  modern design systems with Tailwind CSS, and transforming Figma designs into 
                  pixel-perfect implementations. I'm passionate about bridging the gap between design 
                  and development to deliver exceptional user experiences.
                </p>

                <Button size="lg" className="group" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
              {/* Education */}
              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Computer Applications</h4>
                    <p className="text-primary">Maharaja Surajmal Institute</p>
                    <p className="text-sm text-foreground/60">November 2022 - June 2025</p>
                    <p className="text-sm font-semibold text-foreground/80 mt-2">CGPA: 8.88</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Web Development Intern</h4>
                    <p className="text-primary">Satej Innovations Pvt. Ltd.</p>
                    <p className="text-sm text-foreground/60">July 2024 - August 2024</p>
                    <ul className="text-sm text-foreground/70 mt-3 space-y-2 list-disc list-inside">
                      <li>Developed responsive web applications using React and modern CSS frameworks</li>
                      <li>Collaborated with design team to implement UI/UX improvements</li>
                      <li>Optimized application performance and cross-browser compatibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Core Competencies</h2>
                <p className="text-foreground/70 mt-2">Technologies and tools I work with</p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
