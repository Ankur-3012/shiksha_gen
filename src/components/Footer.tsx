import { Separator } from "@/components/ui/separator";
import { Brain, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-primary-light" />
              <span className="text-xl font-bold">ShikshaGen</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              AI-powered learning app that helps students generate practice questions, 
              create smart summaries, and manage personal question banks.
            </p>
          </div>

          {/* Product */}
          <div className="fade-in-delay-1">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary-light transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Beta Program</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="fade-in-delay-2">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary-light transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="fade-in-delay-3">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/70">
              Get updates about new features and releases
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>© 2024 ShikshaGen. All rights reserved.</p>
          <p>Made with ❤️ for students worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;