import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  // User can replace this with their actual logo image
  // For now, using a modern text logo with gradient
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center font-bold text-foreground text-xl">
          SP
        </div>
      </div>
      <span className="text-xl font-bold gradient-text hidden sm:block">
        Shwetank Pal
      </span>
    </Link>
  );
};
