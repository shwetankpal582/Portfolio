
import { Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "/certifications/aws-cp.pdf",
        description: "Foundational understanding of AWS cloud concepts, services, and security."
    },
    {
        title: "Meta Frontend Developer Professional Certificate",
        issuer: "Meta",
        date: "2023",
        link: "/certifications/meta-frontend.pdf",
        description: "Advanced React, JavaScript, UX/UI, and web development best practices."
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                        Certifications
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Professional recognitions and achievements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="bg-background/40 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Medal className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-base font-bold leading-tight">{cert.title}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-foreground/70 mt-2">
                                    {cert.description}
                                </p>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary mt-4 inline-block hover:underline">
                                        View Certificate
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
