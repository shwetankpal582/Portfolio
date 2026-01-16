import { Github, Mail, Phone } from "lucide-react";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="glass-strong mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 max-w-5xl mx-auto">
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Available for Hire
            </h3>
            <p className="text-foreground/70 max-w-md">
              Open to full-time opportunities and freelance projects. Let's create something amazing together.
            </p>
            {/* Contact Links */}
            <div className="flex flex-col gap-2 pt-2">
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
            </div>
          </div>

          <div className="w-full">
            <Newsletter />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-border mt-8">
            <a
              href="https://github.com/shwetankpal582"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/shwetankpal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://twitter.com/shwetankpal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              Twitter
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
