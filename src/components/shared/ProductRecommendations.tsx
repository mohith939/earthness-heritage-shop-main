import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { VintageSeparator } from "./VintageSeparator";
import { RetroBadge } from "./RetroBadge";
import { products } from "@/data/products";

interface ProductRecommendationsProps {
  currentProductId: string;
  title?: string;
}

export const ProductRecommendations = ({
  currentProductId,
  title = "You Might Also Like"
}: ProductRecommendationsProps) => {
  // Get products from the same category, excluding current product
  const currentProduct = products.find(p => p.id === currentProductId);
  const recommendations = products
    .filter(p => p.id !== currentProductId && p.category === currentProduct?.category)
    .slice(0, 4);

  if (recommendations.length === 0) {
    // Fallback to random products if no category matches
    const fallbackRecommendations = products
      .filter(p => p.id !== currentProductId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    recommendations.push(...fallbackRecommendations);
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RetroBadge variant="accent" className="mb-4">
            Recommended for You
          </RetroBadge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover more treasures from our collection
          </p>
        </div>

        <VintageSeparator ornament="leaf" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-warm-brown hover:text-warm-brown/80 transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};
