"use client";

import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Network error",
      description: "Unable to reach the server. Try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <section id="contact" className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl border-none rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Get in Touch 💬
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl"
                  required
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="rounded-xl"
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl"
                required
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 text-lg rounded-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
