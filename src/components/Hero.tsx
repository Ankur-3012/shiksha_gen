import { Button } from "@/components/ui/button";
import { Sparkles, Brain, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center subtle-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Learning</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 fade-in-delay-1">
              <span className="hero-gradient bg-clip-text text-transparent">
                ShikshaGen
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl fade-in-delay-2">
              Transform your study sessions with AI-powered practice questions, 
              smart summaries, and personalized question banks for faster revision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-delay-3">
              <Button size="lg" className="hero-gradient shadow-hero hover-fade">
                <BookOpen className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Brain className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start fade-in-delay-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Questions Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-in-up-delay-1">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <img 
                src={heroImage} 
                alt="ShikshaGen AI Learning App Interface"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full flex items-center justify-center shadow-feature">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-feature">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;