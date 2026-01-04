import { Button } from "@/components/ui/button";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { Link } from "react-router-dom";
import { Leaf, Globe, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RetroBadge className="mb-4">Our Story</RetroBadge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            About EARTHNESS
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Connecting farms to the world, one harvest at a time.
          </p>
        </div>

        <VintageSeparator ornament="wheat" />

        {/* Story Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="retro-card p-0 overflow-hidden">
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-8xl mb-4 block">👨‍🌾</span>
                    <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
                      Hand-drawn illustration of a farmer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-200">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From Humble Roots
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 1952, nestled in the heart of the countryside, the first 
                  EARTHNESS seed was planted. What began as a small family 
                  operation—trading spices with neighboring villages—has 
                  blossomed into a global network of passionate farmers and 
                  artisans.
                </p>
                <p>
                  Our founder, Henri Beaumont, believed that the finest 
                  ingredients shouldn't be locked away in distant lands. His 
                  vision was simple: bring the world's best to every kitchen, 
                  while ensuring every farmer receives fair value for their craft.
                </p>
                <p>
                  Today, three generations later, we remain true to that vision. 
                  Every product in our collection is personally sourced, 
                  rigorously tested, and lovingly packaged with the same care 
                  Henri showed to his very first customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <VintageSeparator ornament="leaf" />

        {/* Values */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Organic Always",
                desc: "We partner only with certified organic farms. No pesticides, no shortcuts, no compromises.",
              },
              {
                icon: Globe,
                title: "Global Roots",
                desc: "From Ceylon to Provence, we travel the world to find the finest ingredients at their source.",
              },
              {
                icon: Heart,
                title: "Fair Trade",
                desc: "Our farmers earn living wages. When they thrive, their communities flourish.",
              },
              {
                icon: Users,
                title: "Family First",
                desc: "We work with multi-generational family farms who share our passion for quality.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="retro-card text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="h-10 w-10 mx-auto mb-4 text-warm-brown" />
                <h3 className="font-display text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <VintageSeparator ornament="diamond" />

        {/* Quote */}
        <section className="py-16">
          <div className="retro-card max-w-3xl mx-auto text-center py-12 relative">
            <span className="absolute top-4 left-4 text-2xl text-foreground/20">❝</span>
            <span className="absolute bottom-4 right-4 text-2xl text-foreground/20">❞</span>
            
            <p className="font-display text-2xl md:text-3xl italic mb-6 px-8">
              "The earth laughs in flowers, and we harvest that laughter 
              to share with the world."
            </p>
            <p className="font-body text-muted-foreground">
              — Henri Beaumont, Founder (1952)
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Global Network
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We partner with over 50 family farms across 20 countries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { country: "India", specialty: "Spices", emoji: "🇮🇳" },
              { country: "France", specialty: "Herbs", emoji: "🇫🇷" },
              { country: "Turkey", specialty: "Dried Fruits", emoji: "🇹🇷" },
              { country: "Sri Lanka", specialty: "Cinnamon", emoji: "🇱🇰" },
            ].map((partner, index) => (
              <div
                key={partner.country}
                className="retro-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl mb-3 block">{partner.emoji}</span>
                <h3 className="font-display font-semibold mb-1">
                  {partner.country}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {partner.specialty}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our collection and bring the world's finest to your kitchen.
          </p>
          <Button variant="vintage" size="lg" asChild>
            <Link to="/shop">Visit Our Shop</Link>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default About;
