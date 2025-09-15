import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Database, Zap, Target, Clock } from "lucide-react";
import featuresImage from "@/assets/features-icons.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Question Generation",
      description: "Generate unlimited practice questions tailored to your subjects and difficulty level using advanced AI.",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "Transform lengthy study materials into concise, easy-to-understand summaries in seconds.",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Personal Question Bank",
      description: "Build and organize your own question library for quick access and efficient revision.",
      color: "text-primary-dark"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Learning",
      description: "Study 3x faster with AI-optimized content"
    },
    {
      icon: Target,
      title: "Better Results",
      description: "Improve scores with targeted practice"
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Spend less time preparing, more time learning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 fade-in">
            Powerful Features for 
            <span className="hero-gradient bg-clip-text text-transparent"> Smart Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-delay-1">
            Everything you need to accelerate your learning journey with AI-powered tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`shadow-feature hover:shadow-hero transition-all duration-300 hover:-translate-y-2 fade-in-delay-${index + 1}`}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full feature-gradient mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="subtle-gradient rounded-3xl p-12">
          <div className="text-center mb-12 fade-in">
            <h3 className="text-3xl font-bold mb-4">Why Students Choose ShikshaGen</h3>
            <p className="text-muted-foreground text-lg">Join thousands of students achieving better results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center fade-in-delay-${index + 1}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 hero-gradient rounded-full mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;