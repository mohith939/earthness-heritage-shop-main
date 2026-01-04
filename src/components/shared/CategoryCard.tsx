import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  icon: string;
  description: string;
  href: string;
  className?: string;
}

export const CategoryCard = ({ name, icon, description, href, className }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group retro-card text-center flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div className="text-5xl mb-2 group-hover:animate-float">{icon}</div>
      <h3 className="font-display text-xl font-semibold tracking-wide">{name}</h3>
      <p className="font-body text-sm text-muted-foreground">{description}</p>
      <span className="font-display text-xs uppercase tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">
        Explore →
      </span>
    </Link>
  );
};
