import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Database, Zap, Target, Clock, Sparkles, TrendingUp, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Question Generation",
      description: "Generate unlimited practice questions tailored to your subjects and difficulty level using advanced AI algorithms.",
      gradient: "hero-gradient",
      delay: "fade-in-delay-1"
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "Transform lengthy study materials into concise, easy-to-understand summaries in seconds with AI precision.",
      gradient: "feature-gradient",
      delay: "fade-in-delay-2"
    },
    {
      icon: Database,
      title: "Personal Question Bank",
      description: "Build and organize your own question library for quick access and efficient revision across all subjects.",
      gradient: "success-gradient",
      delay: "fade-in-delay-3"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Learning",
      description: "Study 3x faster with AI-optimized content and personalized learning paths",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Better Results",
      description: "Improve scores with targeted practice and intelligent difficulty adjustment",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Spend less time preparing materials, more time actually learning concepts",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and insights",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Proven Method",
      description: "Based on educational research and cognitive science principles",
      color: "text-accent"
    },
    {
      icon: Sparkles,
      title: "Adaptive AI",
      description: "AI that learns your style and adapts to your unique learning needs",
      color: "text-success"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Features */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 fade-in">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Core Features</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8 fade-in-delay-1">
            Powerful Features for 
            <span className="text-gradient block mt-2">Smart Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-delay-2 leading-relaxed">
            Everything you need to accelerate your learning journey with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`shadow-feature hover-lift border-0 card-gradient ${feature.delay} group relative overflow-hidden`}
            >
              <CardContent className="p-10 text-center relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.gradient} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="card-gradient rounded-3xl p-12 lg:p-16 shadow-feature">
          <div className="text-center mb-16 fade-in">
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Why Students Choose 
              <span className="text-gradient">ShikshaGen</span>
            </h3>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Join thousands of students achieving better results with our AI-powered learning platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl bg-white/50 hover-lift fade-in-delay-${(index % 3) + 1} group`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h4 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;