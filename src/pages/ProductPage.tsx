import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Minus, Plus, Leaf, MapPin, Heart, Package, MessageCircle } from "lucide-react";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🌾</span>
          <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
          <Button variant="retro" asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-up">
            <div className="retro-card p-0 overflow-hidden">
              <div className="aspect-square bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Badges under image */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.badges.map((badge) => (
                <RetroBadge key={badge} variant="default">
                  {badge}
                </RetroBadge>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="animate-fade-up delay-200">
            <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="font-display text-3xl font-bold text-warm-brown mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Origin */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-foreground/20">
              <MapPin className="h-5 w-5 text-warm-brown" />
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Origin
                </p>
                <p className="font-body">{product.origin}</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border-2 border-foreground rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary rounded-l-full transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-16 text-center font-display font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary rounded-r-full transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                variant="vintage"
                size="lg"
                className="flex-1"
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              >
                Add to Cart
              </Button>
              <Button
                variant="retro"
                size="lg"
                className="flex-1"
                onClick={() => window.open(`https://wa.me/919392633211?text=${encodeURIComponent(`Hi, I want to buy ${product.name} from Earthness Heritage Shop.`)}`, '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
              <Button variant="retro" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <VintageSeparator ornament="leaf" className="py-4" />

            {/* Product Info Tabs */}
            <div className="space-y-6">
              {/* Benefits */}
              <div>
                <h3 className="font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Leaf className="h-4 w-4" /> Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="font-body text-muted-foreground flex items-start gap-2">
                      <span className="text-warm-brown">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="font-display text-sm uppercase tracking-widest mb-3">
                  Ingredients
                </h3>
                <p className="font-body text-muted-foreground">{product.ingredients}</p>
              </div>

              {/* Storage */}
              <div>
                <h3 className="font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Package className="h-4 w-4" /> Storage
                </h3>
                <p className="font-body text-muted-foreground">{product.storage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farmer Story */}
        <section className="mt-20">
          <div className="retro-card max-w-3xl mx-auto text-center py-12 relative">
            <span className="absolute top-4 left-4 text-xl text-foreground/20">❧</span>
            <span className="absolute top-4 right-4 text-xl text-foreground/20">❧</span>
            <span className="text-4xl mb-4 block">👨‍🌾</span>
            <h3 className="font-display text-2xl font-bold mb-4">The Farmer's Story</h3>
            <p className="font-body text-muted-foreground leading-relaxed italic">
              "{product.farmerStory}"
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
