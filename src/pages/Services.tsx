import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Code, Palette, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Services
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Comprehensive frontend development and design solutions tailored to your needs
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="glass-strong rounded-3xl p-12 text-center space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with clean code and beautiful design.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Work With Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
