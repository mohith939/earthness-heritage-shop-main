import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Minus, Plus, Trash2, MessageCircle } from "lucide-react";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  const handleBuyNow = () => {
    const message = cart.length > 0
      ? `Hi, I want to buy the following items from Earthness Heritage Shop:\n\n${cart.map(item => `${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: $${totalPrice.toFixed(2)}`
      : 'Hi, I want to buy items from Earthness Heritage Shop.';
    window.open(`https://wa.me/919392633211?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🛒</span>
          <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Add some products to your cart to get started.
          </p>
          <Button variant="retro" asChild>
            <Link to="/shop">Browse Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <RetroBadge className="mb-4">Your Cart</RetroBadge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Shopping Cart
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Review your items and proceed to checkout.
          </p>
        </div>

        <VintageSeparator ornament="wheat" />

        {/* Cart Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Items List */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="retro-card p-6">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="font-display text-xl font-bold text-warm-brown mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-foreground rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary rounded-l-full transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-display font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary rounded-r-full transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="retro-card p-6 h-fit">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="font-body">Items ({totalItems})</span>
                <span className="font-display font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Shipping</span>
                <span className="font-display font-semibold">Free</span>
              </div>
              <VintageSeparator ornament="leaf" className="py-2" />
              <div className="flex justify-between text-xl">
                <span className="font-display font-bold">Total</span>
                <span className="font-display font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button
              variant="retro"
              size="lg"
              className="w-full mb-4"
              onClick={handleBuyNow}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Buy Now via WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        {/* Back to Shop */}
        <div className="text-center">
          <Button variant="retro" asChild>
            <Link to="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
