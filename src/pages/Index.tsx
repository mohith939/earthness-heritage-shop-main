import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { ProductCard } from "@/components/shared/ProductCard";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { PageTransition } from "@/components/shared/PageTransition";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { products, categories } from "@/data/products";
import { Leaf, Truck, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzlY8s_x_7-TcyswsvkdbELepfjNKlcZnIPi0u7PzMv-4hv9ttOdu2DTBru98Qxvmks/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Subscribed!",
          description: "Thank you for joining our newsletter.",
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const featuredProducts = products.slice(0, 4);

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
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-up delay-100">
            EARTHNESS
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up delay-200">
            <span className="h-px w-16 bg-foreground/40" />
            <p className="font-display text-lg md:text-xl italic text-muted-foreground">
              De Ferme Au Monde – From Farm to the World
            </p>
            <span className="h-px w-16 bg-foreground/40" />
          </div>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-300">
            Curating the finest organic spices, herbs, and artisanal goods from 
            trusted family farms across the globe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 animate-fade-up delay-400">
            <Button variant="vintage" size="lg" asChild>
              <Link to="/shop">Explore Our Collection</Link>
            </Button>
            <Button variant="retro" size="lg" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
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



      {/* Trust Badges */}
      <TrustBadges />

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
              Shop by Category
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Discover our carefully curated selection of farm-fresh products 🌾
            </p>
          </div>

          <VintageSeparator ornament="wheat" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <RetroBadge variant="accent" className="mb-4">
              Handpicked Selection
            </RetroBadge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-0">
              Featured Products
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Our most beloved treasures from farms around the world
            </p>
          </div>

          <VintageSeparator ornament="leaf" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12">
            {featuredProducts.map((product, index) => (
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
            <Button variant="retro" size="lg" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Story Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="retro-card max-w-4xl mx-auto text-center py-16 relative overflow-hidden">
            {/* Decorative corners */}
            <span className="absolute top-4 left-4 text-2xl text-foreground/20">❧</span>
            <span className="absolute top-4 right-4 text-2xl text-foreground/20">❧</span>
            <span className="absolute bottom-4 left-4 text-2xl text-foreground/20">❧</span>
            <span className="absolute bottom-4 right-4 text-2xl text-foreground/20">❧</span>

            <span className="text-5xl mb-6 block">🌍</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Heritage
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Hand-selected treasures from family farms around the world. Each product carries a story of tradition and care.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Discover Our Story →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t-2 border-foreground/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join the Harvest
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Subscribe for farm updates, recipes, and exclusive offers from EARTHNESS
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border-2 border-foreground rounded-full bg-transparent font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
              disabled={isSubmitting}
            />
            <Button variant="vintage" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default Index;
