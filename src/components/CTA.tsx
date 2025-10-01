import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, CheckCircle, Bell, Star } from "lucide-react";
import { BetaSignupDialog } from "./BetaSignupDialog";

const CTA = () => {
  const features = [
    "AI question generation with coins",
    "Smart summary creation", 
    "Personal question bank",
    "Daily coin rewards (3 coins/day)",
    "Coin store for additional credits"
  ];

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full blur-2xl floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-6xl mx-auto shadow-hero border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Main CTA */}
              <div className="p-12 lg:p-16 text-center lg:text-left card-gradient">
                <div className="fade-in">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Coming Soon</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                    Ready to Earn Your
                    <span className="text-gradient block mt-2">Daily Coins?</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    Join thousands of students who get 3 daily coins to power their AI learning journey. 
                    Start studying smarter with our coin-based credit system.
                  </p>
                </div>

                <div className="space-y-6 fade-in-delay-1">
                  <Button size="lg" className="w-full lg:w-auto hero-gradient shadow-feature hover-lift text-lg px-10 py-4 rounded-2xl font-semibold group">
                    <Bell className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    Get Your Daily Coins
                  </Button>
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-primary" />
                      <span>Coming soon on Android</span>
                    </div>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-success" />
                      <span>Free Download</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 fade-in-delay-2">
                  <p className="text-muted-foreground mb-6 text-lg">
                    Want to be part of our beta program?
                  </p>
                  <BetaSignupDialog />
                </div>
              </div>

              {/* Right Side - Features List */}
              <div className="p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="fade-in-delay-1">
                  <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    What You Get
                  </h3>
                  
                  <ul className="space-y-6">
                    {features.map((feature, index) => (
                      <li key={index} className={`flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover-lift fade-in-delay-${index + 2} group`}>
                        <div className="w-8 h-8 success-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 p-6 rounded-2xl glass-effect fade-in-delay-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-display mb-2">3 Daily Coins</div>
                    <p className="text-muted-foreground">
                      Sign in daily to earn coins. Buy more from our coin store when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;