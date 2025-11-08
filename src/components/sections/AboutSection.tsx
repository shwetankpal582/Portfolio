import { GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export const AboutSection = () => {
  const skills = [
    "ReactJS", "JavaScript", "TypeScript", "HTML5", "CSS3",
    "Tailwind CSS", "Bootstrap", "Figma", "Git", "GitHub",
    "Responsive Design", "UI/UX Design", "RESTful APIs"
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              About Me
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A passionate frontend developer dedicated to crafting exceptional digital experiences
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src={profileImage}
                alt="Shwetank Pal"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Professional Journey</h3>
              
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-strong rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Computer Applications</h4>
                  <p className="text-primary">Maharaja Surajmal Institute, Delhi</p>
                  <p className="text-sm text-foreground/60">November 2022 - June 2025</p>
                  <p className="text-sm font-semibold text-foreground/80 mt-2">CGPA: 8.88</p>
<br />
<hr />
<br />
                  <h4 className="font-semibold text-lg">Intermediate</h4>
                  <p className="text-primary">Shri Mahaprabhu Public School, Prayagraj</p>
                  <p className="text-sm text-foreground/60">April 2020 - July 2021</p>
                  <p className="text-sm font-semibold text-foreground/80 mt-2">CGPA: 8.5</p>
<br />
<hr />
<br />
                  <h4 className="font-semibold text-lg">High-School</h4>
                  <p className="text-primary">Shri Mahaprabhu Public School, Prayagraj</p>
                  <p className="text-sm text-foreground/60">April 2018 - May 2019</p>
                  <p className="text-sm font-semibold text-foreground/80 mt-2">CGPA: 8.5</p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Web Development Intern</h4>
                  <p className="text-primary">Satej Innovations Pvt. Ltd.</p>
                  <p className="text-sm text-foreground/60">July 2024 - August 2024</p>
                  <ul className="text-sm text-foreground/70 mt-3 space-y-2 list-disc list-inside">
                     <li>Managed and maintained the company’s e-commerce website built on  <b>WordPress</b>, ensuring consistent uptime and optimal performance.</li>
                     <li>Customized <b>themes</b> and <b>plugins</b> to align with business and design requirements, improving user experience and functionality.</li>
                     <li>Integrated and configured <b>WooCommerce</b> for efficient product management and secure checkout workflows.</li>
                     <li>Enhanced website responsiveness across desktop and mobile devices using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</li>
                     <li>Implemented performance optimizations including <b>caching</b>, <b>image compression</b>, and <b>database cleanup</b> to reduce load time.</li>
                     <li>Performed regular <b>maintenance</b> tasks—plugin updates, backups, and security checks—to ensure site reliability.</li>
                     <li>Collaborated with the design and marketing teams to deploy responsive UI updates and promotional layouts.</li>
                     <li>Assisted in troubleshooting, debugging, and adding new features using <b>PHP</b> and <b>WordPress</b> tools.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Core Competencies</h3>
              <p className="text-foreground/70 mt-2">Technologies and tools I work with</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="glass px-6 py-3 rounded-full font-medium hover:scale-105 hover:border-primary/40 transition-all cursor-default border border-white/5"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
