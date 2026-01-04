import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/Earthness_Logo.png" alt="Earthness Logo" className="h-16 w-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">EARTHNESS</h3>
            <p className="font-body text-background/80 mb-4">
              De Ferme Au Monde – From Farm to the World. Bringing you the finest organic produce since 2025.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <Leaf className="h-4 w-4" />
              <span className="font-body text-sm italic">100% Organic</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Shop", "About Us", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-background/80 hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6">
              Categories
            </h4>
            <ul className="space-y-3">
              {["Spices", "Herbs", "Grains", "Dried Goods", "Artisanal"].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-body text-background/80 hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-background/60" />
                <span className="font-body text-background/80">
                  123 Farm Road, Countryside, Earth 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/60" />
                <span className="font-body text-background/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/60" />
                <span className="font-body text-background/80">hello@earthness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/60">
              © 2024 EARTHNESS. All rights reserved. Harvested with love.
            </p>
            <div className="flex items-center gap-1 text-background/40">
              <span className="text-2xl">✦</span>
              <span className="font-display text-xs uppercase tracking-widest">Farm Fresh Since 2025</span>
              <span className="text-2xl">✦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
