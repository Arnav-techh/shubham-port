import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// Wedding background photos (paths same rakho jo hero me use ho rahe hain)
import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding1 from '@/assets/prewedding-1.jpg';
import maternity1 from '@/assets/maternity-1.jpg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* GLOBAL WEDDING BACKDROP */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-white to-amber-100" />

        {/* Center glow to pull focus to content */}
        <div className="absolute inset-0 bg-radial from-white/80 via-white/40 to-transparent" />

        {/* Soft vignette at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_60%,_rgba(0,0,0,0.08))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_transparent_60%,_rgba(0,0,0,0.08))]" />

        {/* Large blurred wedding images */}
        <img
          src={heroWedding}
          alt=""
          className="hidden lg:block absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[26rem] object-cover blur-3xl opacity-45"
        />
        <img
          src={prewedding1}
          alt=""
          className="hidden md:block absolute top-1/3 -left-32 w-80 h-80 object-cover blur-2xl opacity-35"
        />
        <img
          src={maternity1}
          alt=""
          className="hidden md:block absolute bottom-0 -right-24 w-96 h-96 object-cover blur-3xl opacity-35"
        />
      </div>

      {/* PAGE STRUCTURE */}
      <div className="min-h-screen flex flex-col relative z-10">
        <Header />

        {/* Main content slightly lifted on top of background */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
