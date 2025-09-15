import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, CheckCircle } from "lucide-react";

const CTA = () => {
  const features = [
    "Free AI question generation",
    "Smart summary creation", 
    "Personal question bank",
    "Offline study mode",
    "Progress tracking"
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-hero">
          <CardContent className="p-12 text-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students already using ShikshaGen to ace their studies. 
                Download the app and start your AI-powered learning journey today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="fade-in-delay-1">
                <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  What You Get
                </h3>
                <ul className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fade-in-delay-2">
                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    ShikshaGen is currently in development. Be the first to know when it launches!
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full hero-gradient shadow-soft hover-fade">
                      <Download className="w-5 h-5 mr-2" />
                      Notify Me When Ready
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Available on Android • Free Download
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in-delay-3">
              <p className="text-muted-foreground mb-6">
                Have questions? Want to be part of our beta program?
              </p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;