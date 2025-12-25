import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 py-12 mandala-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Shubham Limbodiya
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Capturing timeless moments of love, joy, and celebration. 
              Your trusted wedding photographer in Indore.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-rose/80 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-rose/80 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-rose/80 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'Gallery', 'Services', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-background/70 hover:text-rose-light transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-background/70 hover:text-rose-light transition-colors duration-200 text-sm"
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@shubhamlimbodiya.com"
                className="flex items-center gap-3 text-background/70 hover:text-rose-light transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                hello@shubhamlimbodiya.com
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Vijay Nagar, Indore, Madhya Pradesh 452010</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Shubham Limbodiya Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
