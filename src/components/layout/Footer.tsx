import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm text-background/85 py-5 md:py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Brand + tagline */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm md:text-base font-semibold tracking-tight">
              Shubham Limbodiya Photography
            </p>
            <p className="text-[0.78rem] md:text-sm text-background/65">
              Wedding • Pre‑Wedding • Maternity • Indore, MP
            </p>
          </div>

          {/* Middle: Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/8 hover:bg-rose/80 text-background transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/8 hover:bg-rose/80 text-background transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/8 hover:bg-rose/80 text-background transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[0.78rem] md:text-xs text-background/60">
              © {new Date().getFullYear()} Shubham Limbodiya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
