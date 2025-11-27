import { ServiceCard } from "@/components/ServiceCard";
import { Code, Palette, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Web Development",
      description: "Building scalable, responsive web applications with React, modern JavaScript, and component-based architecture. Focus on performance, accessibility, and clean code."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with Figma. Delivering wireframes, prototypes, user flows, and high-fidelity mockups that prioritize user experience and visual appeal."
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Modernizing existing websites with responsive redesigns, accessibility audits, performance optimizations, and contemporary design patterns."
    },
    {
      icon: Layers,
      title: "Portfolio & Personal Websites",
      description: "End-to-end creation of personal branding websites and portfolios. From concept to deployment, crafting unique digital identities that stand out."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Services
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive frontend development and design solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="glass-strong rounded-3xl p-12 text-center space-y-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold">Ready to Start Your Project?</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with clean code and beautiful design.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Work With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
