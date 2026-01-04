import { Button } from "@/components/ui/button";
import { VintageSeparator } from "@/components/shared/VintageSeparator";
import { RetroBadge } from "@/components/shared/RetroBadge";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzlY8s_x_7-TcyswsvkdbELepfjNKlcZnIPi0u7PzMv-4hv9ttOdu2DTBru98Qxvmks/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll respond within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to Send",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RetroBadge className="mb-4">Get in Touch</RetroBadge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you. Whether you have questions about our 
            products or want to share a recipe, our door is always open.
          </p>
        </div>

        <VintageSeparator ornament="leaf" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="retro-card">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-display text-sm uppercase tracking-widest mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-transparent font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="John Farmer"
                  />
                </div>

                <div>
                  <label className="font-display text-sm uppercase tracking-widest mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-transparent font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="john@farm.com"
                  />
                </div>

                <div>
                  <label className="font-display text-sm uppercase tracking-widest mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-transparent font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="Question about an order"
                  />
                </div>

                <div>
                  <label className="font-display text-sm uppercase tracking-widest mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-transparent font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" variant="vintage" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up delay-200">
            <div className="space-y-8">
              {/* Info Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Farm Store",
                  lines: ["123 Farm Road", "Countryside, Earth 12345"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+1 (555) 123-4567", "Mon-Fri, 9am-5pm EST"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["hello@earthness.com", "support@earthness.com"],
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  lines: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 4pm", "Sunday: Closed"],
                },
              ].map((info, index) => (
                <div
                  key={info.title}
                  className="retro-card flex items-start gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-secondary rounded-full">
                    <info.icon className="h-6 w-6 text-warm-brown" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line} className="font-body text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="retro-card p-0 overflow-hidden">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-5xl mb-4 block">🗺️</span>
                    <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
                      Farm Location Map
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <section className="py-16 text-center">
          <div className="retro-card max-w-2xl mx-auto py-12 relative">
            <span className="absolute top-4 left-4 text-xl text-foreground/20">❧</span>
            <span className="absolute top-4 right-4 text-xl text-foreground/20">❧</span>
            <span className="text-5xl mb-4 block">❓</span>
            <h3 className="font-display text-2xl font-bold mb-4">
              Have Questions?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Check our frequently asked questions for quick answers about 
              shipping, returns, and product information.
            </p>
            <Button variant="retro">View FAQ</Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
