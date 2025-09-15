import { Separator } from "@/components/ui/separator";
import { Brain, Mail, Github, Twitter, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 hero-gradient rounded-2xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">ShikshaGen</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              AI-powered learning app that helps students generate practice questions, 
              create smart summaries, and manage personal question banks for accelerated learning.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <Sparkles className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </div>
          </div>

          {/* Product */}
          <div className="fade-in-delay-1">
            <h4 className="font-display font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-background/80">
              <li><a href="#features" className="hover:text-primary-light transition-colors hover-scale inline-block">Features</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Beta Program</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Roadmap</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="fade-in-delay-2">
            <h4 className="font-display font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-background/80">
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Community</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors hover-scale inline-block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="fade-in-delay-3">
            <h4 className="font-display font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-12 h-12 bg-background/10 rounded-2xl flex items-center justify-center text-background/80 hover:text-primary-light hover:bg-primary/20 transition-all hover-scale">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-background/10 rounded-2xl flex items-center justify-center text-background/80 hover:text-primary-light hover:bg-primary/20 transition-all hover-scale">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-background/10 rounded-2xl flex items-center justify-center text-background/80 hover:text-primary-light hover:bg-primary/20 transition-all hover-scale">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/80 mb-4">
              Get updates about new features and releases
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-sm text-primary-light">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>In Development</span>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-background/70">
          <p className="mb-4 md:mb-0">© 2024 ShikshaGen. All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;