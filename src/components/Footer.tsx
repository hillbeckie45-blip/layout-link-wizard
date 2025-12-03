import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-foreground">
              Ascend Agency
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Next-Gen Marketing Agency delivering real results for real brands.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Scottsdale, Arizona</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Meta & Instagram</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Email Marketing</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">SMS Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Get in Touch</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Ascend Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
