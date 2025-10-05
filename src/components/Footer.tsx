import { Github, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="glass-strong mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold gradient-text">
            Available for Hire
          </h3>
          
          <p className="text-foreground/70">
            Open to full-time opportunities and freelance projects
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a
              href="mailto:shwetankpal582@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              shwetankpal582@gmail.com
            </a>
            
            <a
              href="tel:+919451509640"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9451509640
            </a>
            
            <a
              href="https://github.com/shwetankpal582"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} Shwetank Pal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
