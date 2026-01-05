import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { PageTransition } from "@/components/shared/PageTransition";
import { ProductRecommendations } from "@/components/shared/ProductRecommendations";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { ProductZoom } from "@/components/shared/ProductZoom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Minus, Plus, Leaf, MapPin, Package, MessageCircle, Star, StarHalf } from "lucide-react";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <PageTransition>
        <main className="min-h-screen py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">🌾</span>
            <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
            <Button variant="retro" asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
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
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/3] bg-secondary object-contain w-full h-full"
              />
            </div>
            {/* Badges under image */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.badges.map((badge) => (
                <RetroBadge key={badge} variant="default">
                  {badge}
                </RetroBadge>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">
                (4.8) • 127 reviews
              </span>
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

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-3 block">
                Quantity
              </label>
              <div className="flex items-center justify-between">
                <div className="flex items-center border-2 border-foreground rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center font-display font-semibold py-3">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-display text-lg font-bold text-warm-brown">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Total
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button
                variant="vintage"
                size="lg"
                className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity })}
              >
                Add to Cart
              </Button>
              <Button
                variant="retro"
                size="lg"
                className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(`https://wa.me/919392633211?text=${encodeURIComponent(`Hi, I want to buy ${product.name} from Earthness Heritage Shop.`)}`, '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Buy Now
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

        {/* Product Recommendations */}
        <ProductRecommendations currentProductId={product.id} />

        {/* Trust Badges */}
        <TrustBadges />
      </div>
    </main>
    </PageTransition>
  );
};

export default ProductPage;
