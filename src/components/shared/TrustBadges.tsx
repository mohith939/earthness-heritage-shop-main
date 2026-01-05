import { Shield, Truck, Award, Lock, CheckCircle } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "100% Organic Certified",
    description: "All products verified by independent labs",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50 worldwide",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected from family farms",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    description: "SSL encrypted checkout process",
  },
  {
    icon: CheckCircle,
    title: "30-Day Guarantee",
    description: "Money back if not satisfied",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-white border-y border-secondary/50 mx-6 sm:mx-12 lg:mx-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-warm-brown/10 p-4 rounded-full mb-4">
                <badge.icon className="h-8 w-8 text-warm-brown" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2">
                {badge.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
