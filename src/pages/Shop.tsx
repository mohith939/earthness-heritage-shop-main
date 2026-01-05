import { useState, useMemo } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { PageTransition } from "@/components/shared/PageTransition";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { SearchBar, SearchFilters } from "@/components/shared/SearchBar";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const categoryFilters = ["All", ...categories.map(c => c.name)];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    category: "All",
    sortBy: 'name',
    inStock: false,
  });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter (legacy category buttons)
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply search filters
    if (searchFilters.category !== "All") {
      filtered = filtered.filter((p) => p.category === searchFilters.category);
    }

    // Apply in stock filter (assuming all products are in stock for now)
    if (searchFilters.inStock) {
      // Add stock logic here when available
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (searchFilters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          // Assuming newer products have higher IDs
          return b.id.localeCompare(a.id);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [activeCategory, searchQuery, searchFilters]);

  return (
    <PageTransition>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🌿</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float delay-300">🌾</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-10">✦</div>
        <div className="absolute top-1/3 right-5 text-4xl opacity-10">✦</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <RetroBadge className="mb-4">Our Collection</RetroBadge>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-up delay-100">
            The Shop
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up delay-200">
            <span className="h-px w-16 bg-foreground/40" />
            <p className="font-display text-lg md:text-xl italic text-muted-foreground">
              De Ferme Au Monde – From Farm to the World
            </p>
            <span className="h-px w-16 bg-foreground/40" />
          </div>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-up delay-300">
            Hand-selected treasures from family farms around the world.
            Each product carries a story of tradition and care.
          </p>
        </div>

        {/* Bottom Ornament */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="flex items-center gap-1 text-foreground/20">
            <span className="text-2xl">❧</span>
            <span className="h-px w-12 bg-foreground/20" />
            <span className="text-3xl">✿</span>
            <span className="h-px w-12 bg-foreground/20" />
            <span className="text-2xl">❧</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar
            onSearch={(query, filters) => {
              setSearchQuery(query);
              setSearchFilters(filters);
            }}
          />
        </div>

        <VintageSeparator ornament="wheat" />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
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

        {/* Results Count */}
        <div className="mb-4 text-center">
          <p className="font-body text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {(searchQuery || searchFilters.category !== "All") && (
              <span> for "{searchQuery || searchFilters.category}"</span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
            <p className="font-display text-xl text-muted-foreground mb-4">
              No products found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchFilters({
                  category: "All",
                  sortBy: 'name',
                  inStock: false,
                });
                setActiveCategory("All");
              }}
              className="font-display text-sm uppercase tracking-widest text-warm-brown hover:text-warm-brown/80 transition-colors"
            >
              Clear filters →
            </button>
          </div>
        )}

        {/* Trust Badges */}
        <TrustBadges />

        {/* Bottom Ornament */}
        <div className="mt-8 flex justify-center">
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
    </PageTransition>
  );
};

export default Shop;
