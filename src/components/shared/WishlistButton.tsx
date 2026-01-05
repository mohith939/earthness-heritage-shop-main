import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

export const WishlistButton = ({ productId, className }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Here you would typically update the wishlist in context or localStorage
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleWishlist}
      className={cn(
        "absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200",
        isWishlisted && "text-red-500",
        className
      )}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-all duration-200",
          isWishlisted && "fill-current"
        )}
      />
    </Button>
  );
};
