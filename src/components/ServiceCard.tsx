import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-strong rounded-2xl p-8 space-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold">{title}</h3>
      
      <p className="text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
