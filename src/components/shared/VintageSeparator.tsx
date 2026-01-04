import { cn } from "@/lib/utils";

interface VintageSeparatorProps {
  className?: string;
  ornament?: "leaf" | "star" | "diamond" | "wheat";
}

export const VintageSeparator = ({ className, ornament = "star" }: VintageSeparatorProps) => {
  const ornaments = {
    leaf: "🌿",
    star: "✦",
    diamond: "◆",
    wheat: "🌾",
  };

  return (
    <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
      <div className="flex-1 h-px bg-foreground/30 max-w-32" />
      <span className="text-foreground/50 text-xl">{ornaments[ornament]}</span>
      <div className="flex-1 h-px bg-foreground/30 max-w-32" />
    </div>
  );
};
