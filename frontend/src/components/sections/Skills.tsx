import { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";

const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js / Express", level: 80 },
    { name: "MongoDB / SQL", level: 75 },
    { name: "UI/UX Design", level: 85 },
];

export const Skills = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start animation
                    setProgress(skills.map(skill => skill.level));
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-20 relative" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                        Top Skills
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        A visualization of my technical proficiency.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 pl-4 pr-4">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between text-sm font-medium items-center">
                                <span>{skill.name}</span>
                                <span className="text-muted-foreground">{progress[index]}%</span>
                            </div>
                            {/* Animated Progress Bar */}
                            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                <div
                                    className="h-full animate-shimmer rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${progress[index]}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
