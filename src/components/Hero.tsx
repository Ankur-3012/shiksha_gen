import { Button } from "@/components/ui/button";
import { Sparkles, Brain, BookOpen, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-app-interface.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center subtle-gradient overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 hero-gradient rounded-full opacity-20 floating"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 feature-gradient rounded-full opacity-30 floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 glass-effect text-primary px-6 py-3 rounded-full mb-8 fade-in hover-glow">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Learning Revolution</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-display font-black mb-8 fade-in-delay-1 leading-tight">
              <span className="text-gradient">
                ShikshaGen
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed fade-in-delay-2 font-medium">
              Transform your study sessions with AI-powered practice questions, 
              smart summaries, and personalized question banks for 
              <span className="text-primary font-semibold"> faster revision</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start fade-in-delay-3 mb-12">
              <Button size="lg" className="hero-gradient shadow-hero hover-lift text-lg px-8 py-4 rounded-2xl font-semibold">
                <BookOpen className="w-6 h-6 mr-3" />
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-4 rounded-2xl font-semibold hover-scale">
                <Brain className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 fade-in-delay-3">
              <div className="text-center hover-scale">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-3xl font-bold text-primary font-display">10K+</div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Active Students</div>
              </div>
              <div className="text-center hover-scale">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-accent" />
                  <div className="text-3xl font-bold text-accent font-display">50K+</div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Questions Generated</div>
              </div>
              <div className="text-center hover-scale">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-success" />
                  <div className="text-3xl font-bold text-success font-display">95%</div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-in-up-delay-1">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="ShikshaGen AI Learning App Interface"
                  className="w-full h-auto rounded-3xl shadow-hero hover-lift"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 hero-gradient rounded-2xl flex items-center justify-center shadow-feature hover-scale pulse-glow">
                <Brain className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 success-gradient rounded-2xl flex items-center justify-center shadow-accent hover-scale">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-accent/90 rounded-xl flex items-center justify-center shadow-medium hover-scale floating">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;