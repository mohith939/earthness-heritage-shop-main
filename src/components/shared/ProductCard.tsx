import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RetroBadge } from "./RetroBadge";
import { WishlistButton } from "./WishlistButton";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badges?: string[];
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  badges = [],
  className,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className={cn("group", className)}>
      <Link to={`/product/${id}`} className="block">
        <div className="retro-card overflow-hidden p-0">
          {/* Image Container */}
          <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
            {/* Badges */}
            {badges.length > 0 && (
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
                {badges.map((badge) => (
                  <RetroBadge key={badge} variant="filled" className="text-xs">
                    {badge}
                  </RetroBadge>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 lg:p-5">
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1 sm:mb-2">
              {category}
            </p>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-warm-brown transition-colors leading-tight">
              {name}
            </h3>
            <p className="font-display text-lg sm:text-xl font-bold">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex gap-2 mt-3 sm:mt-4">
        <Button variant="retro" className="flex-1 text-sm sm:text-base py-2 sm:py-3" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
