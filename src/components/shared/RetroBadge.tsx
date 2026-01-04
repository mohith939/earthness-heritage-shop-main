import { cn } from "@/lib/utils";

interface RetroBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "filled" | "accent";
  className?: string;
}

export const RetroBadge = ({ children, variant = "default", className }: RetroBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-display uppercase tracking-wider rounded-full transition-all",
        variant === "default" && "border border-foreground text-foreground",
        variant === "filled" && "bg-foreground text-background",
        variant === "accent" && "bg-warm-brown text-background",
        className
      )}
    >
      {children}
    </span>
  );
};
