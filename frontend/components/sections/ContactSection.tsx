import { Mail, Phone, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data?.success) {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. I will get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to send",
          description: data?.error || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        title: "Network error",
        description: error?.message || "Unable to reach the server. Try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Get In Touch
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:shwetankpal582@gmail.com"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:border-primary/30 transition-all border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Email</p>
                      <p className="font-semibold break-all">shwetankpal582@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919451509640"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:border-primary/30 transition-all border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Phone</p>
                      <p className="font-semibold">+91-9451509640</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/shwetankpal582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:border-primary/30 transition-all border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">GitHub</p>
                      <p className="font-semibold">@shwetankpal582</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold">Availability</h3>
                <p className="text-foreground/70">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Feel free to reach out to discuss your next project!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-strong rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={submitting}>
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
