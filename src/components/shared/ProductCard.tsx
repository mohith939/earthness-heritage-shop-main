import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RetroBadge } from "./RetroBadge";
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
          <div className="relative aspect-square bg-secondary overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Badges */}
            {badges.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <RetroBadge key={badge} variant="filled">
                    {badge}
                  </RetroBadge>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">
              {category}
            </p>
            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-warm-brown transition-colors">
              {name}
            </h3>
            <p className="font-display text-xl font-bold">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>

      <Button variant="retro" className="w-full mt-4" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
