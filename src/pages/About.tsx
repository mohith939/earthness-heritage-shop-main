import { Button } from "@/components/ui/button";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { Link } from "react-router-dom";
import { Leaf, Globe, Heart, Users, Sprout, Shield, Award, Truck } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RetroBadge className="mb-4">Our Story</RetroBadge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            About Earthness
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            From Farm to Globe
          </p>
        </div>

        <VintageSeparator ornament="wheat" />

        {/* Story Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="retro-card p-0 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-brown/10 to-secondary flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTlBMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
                  <div className="text-center p-8 relative z-10">
                    <div className="flex justify-center items-center mb-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                        <span className="text-6xl">🌱</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-center items-center gap-2">
                        <Sprout className="h-5 w-5 text-warm-brown" />
                        <span className="font-display text-sm uppercase tracking-widest text-warm-brown font-semibold">
                          Sustainable Farming
                        </span>
                      </div>
                      <p className="font-body text-xs text-muted-foreground max-w-xs">
                        Connecting local farms with global markets through ethical trade practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-200">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  Earthness celebrates the journey of nature's bounty from the heart of local farms to the tables of the world. Inspired by sustainable practices and ethical trade, we bridge the gap between farmers and consumers, ensuring every product carries freshness, quality, and authenticity.
                </p>
                <p>
                  Our vision is to honor the earth and the people who cultivate it. By connecting local farms with international markets, Earthness doesn't just export products—it exports trust, health, and natural goodness.
                </p>
                <p>
                  Every grain, spice, and product tells a story—of care, cultivation, and culture—and we bring that story to the world with pride.
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
                title: "Sustainability",
                desc: "Respecting the earth in every step",
                gradient: "from-green-50 to-emerald-50",
                iconBg: "from-green-100 to-emerald-100",
              },
              {
                icon: Shield,
                title: "Transparency",
                desc: "Honest sourcing and fair trade",
                gradient: "from-blue-50 to-cyan-50",
                iconBg: "from-blue-100 to-cyan-100",
              },
              {
                icon: Award,
                title: "Quality",
                desc: "Premium products delivered globally",
                gradient: "from-amber-50 to-orange-50",
                iconBg: "from-amber-100 to-orange-100",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Connecting farmers to international markets",
                gradient: "from-purple-50 to-indigo-50",
                iconBg: "from-purple-100 to-indigo-100",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="retro-card text-center animate-fade-up hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${value.gradient} p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className={`bg-gradient-to-br ${value.iconBg} p-3 rounded-full`}>
                    <value.icon className="h-8 w-8 text-warm-brown" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-warm-brown transition-colors">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <VintageSeparator ornament="diamond" />

        {/* Quote */}
        <section className="py-16">
          <div className="retro-card max-w-4xl mx-auto text-center py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/5"></div>
            <div className="absolute top-4 left-4 text-4xl text-warm-brown/20">❝</div>
            <div className="absolute bottom-4 right-4 text-4xl text-warm-brown/20">❞</div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-warm-brown/10 p-3 rounded-full">
                  <Globe className="h-12 w-12 text-warm-brown" />
                </div>
              </div>
              <p className="font-display text-2xl md:text-3xl italic mb-6 px-8 text-foreground leading-relaxed">
                "From Farm to Globe – Every product carries the essence of nature's bounty and human dedication."
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-warm-brown/30"></div>
                <p className="font-body text-sm text-muted-foreground font-medium">
                  Earthness Mission Statement
                </p>
                <div className="h-px w-8 bg-warm-brown/30"></div>
              </div>
            </div>
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
        <section className="py-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/5 via-transparent to-warm-brown/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-warm-brown/10 p-4 rounded-full">
                <Truck className="h-12 w-12 text-warm-brown" />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Explore our collection and bring the world's finest to your kitchen.
            </p>
            <Button variant="vintage" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link to="/shop">Visit Our Shop</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
