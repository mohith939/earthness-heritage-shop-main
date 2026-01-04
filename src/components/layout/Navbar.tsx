import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-foreground/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Earthness_Logo.png"
              alt="Earthness Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-display text-sm uppercase tracking-widest transition-all duration-300 hover:text-warm-brown relative",
                  location.pathname === link.path
                    ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-foreground"
                    : "text-foreground/70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-background text-xs flex items-center justify-center font-body">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-up">
            <div className="flex flex-col gap-4 pt-4 border-t border-foreground/20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-display text-lg uppercase tracking-widest py-2 transition-all duration-300",
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-foreground/70"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
