import { Star, Quote } from "lucide-react";
import { VintageSeparator } from "./VintageSeparator";
import { RetroBadge } from "./RetroBadge";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "The quality of these spices is absolutely incredible. My cooking has never tasted so authentic and fresh. The cardamom pods are a game-changer!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80",
  },
  {
    name: "Marcus Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "As a chef, I appreciate the direct-from-farm sourcing. The turmeric root is vibrant and potent. My customers notice the difference immediately.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Priya Patel",
    location: "London, UK",
    rating: 5,
    text: "Finally found authentic Indian spices that remind me of home. The packaging is beautiful and the quality is unmatched. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RetroBadge variant="accent" className="mb-4">
            Customer Love
          </RetroBadge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EARTHNESS for their culinary adventures
          </p>
        </div>

        <VintageSeparator ornament="leaf" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="retro-card text-center p-8 relative animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-warm-brown mx-auto mb-4 opacity-50" />

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-body text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-warm-brown/20"
                />
                <div className="text-left">
                  <p className="font-display font-semibold text-sm">{testimonial.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span>50+ Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
