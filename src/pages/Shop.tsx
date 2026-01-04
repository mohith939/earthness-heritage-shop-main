import { useState } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const categoryFilters = ["All", "Spices", "Herbs", "Grains", "Dried Goods", "Artisanal"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <RetroBadge className="mb-4">Our Collection</RetroBadge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            The Shop
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-selected treasures from family farms around the world. 
            Each product carries a story of tradition and care.
          </p>
        </div>

        <VintageSeparator ornament="wheat" />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 font-display text-sm uppercase tracking-widest rounded-full border-2 transition-all duration-300",
                activeCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/30 text-foreground/70 hover:border-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🌾</span>
            <p className="font-display text-xl text-muted-foreground">
              No products found in this category
            </p>
          </div>
        )}

        {/* Bottom Ornament */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2 text-foreground/20">
            <span className="text-2xl">❧</span>
            <span className="font-display text-xs uppercase tracking-widest">
              Harvested with Love
            </span>
            <span className="text-2xl">❧</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
