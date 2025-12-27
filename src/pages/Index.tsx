import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Camera,
  Heart,
  Users,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding1 from '@/assets/prewedding-1.jpg';
import maternity1 from '@/assets/maternity-1.jpg';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';
import shubhamPhoto from '@/assets/shubham/shubham-portrait.jpg';
import events1 from '@/assets/maternity-1.jpg';
import babyShoot1 from '@/assets/maternity-1.jpg';
import commercial1 from '@/assets/maternity-1.jpg';

const stats = [
  { number: '100+', label: 'Wedding Stories', icon: Heart },
  { number: '50+', label: 'Pre-Wedding Shoots', icon: Camera },
  { number: '30+', label: 'Maternity Sessions', icon: Users },
  { number: '75+', label: 'Events Captured', icon: Camera },
  { number: '40+', label: 'Baby Shoots', icon: Users },
  { number: '25+', label: 'Commercial Projects', icon: Heart },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden">
        {/* BACKGROUND: 4 blurred photos full width */}
        <div className="absolute inset-0 -z-10 opacity-80">
          <div className="grid grid-cols-2 md:grid-cols-4 h-full">
            <div className="relative">
              <img
                src={heroWedding}
                alt="Wedding"
                className="w-full h-full object-cover blur-sm hover:blur-0 transition-[filter] duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
            </div>
            <div className="relative hidden md:block">
              <img
                src={prewedding1}
                alt="Pre-wedding"
                className="w-full h-full object-cover blur-md hover:blur-0 transition-[filter] duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
            </div>
            <div className="relative hidden md:block">
              <img
                src={weddingCeremony}
                alt="Ceremony"
                className="w-full h-full object-cover blur-md hover:blur-0 transition-[filter] duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
            </div>
            <div className="relative">
              <img
                src={maternity1}
                alt="Maternity"
                className="w-full h-full object-cover blur-md hover:blur-0 transition-[filter] duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
            </div>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Portrait – BIG + zoom on hover */}
            <div className="mx-auto w-80 h-80 md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white/30 bg-background/40 backdrop-blur-lg">
              <img
                src={shubhamPhoto}
                alt="Shubham Limbodiya"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Name + title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Shubham Limbodiya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Wedding | Pre-Wedding | Maternity | Events | Baby Shoots | Commercial
            </p>

            {/* Socials */}
            <div className="flex gap-4 justify-center mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/40 backdrop-blur-md hover:bg-rose/80 transition-all duration-300"
              >
                <Instagram size={20} className="text-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/40 backdrop-blur-md hover:bg-rose/80 transition-all duration-300"
              >
                <Facebook size={20} className="text-foreground" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/40 backdrop-blur-md hover:bg-rose/80 transition-all duration-300"
              >
                <Youtube size={20} className="text-foreground" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-rose text-rose hover:bg-rose hover:text-primary-foreground px-8 py-3 text-lg"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 text-lg">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - Updated with 6 stats */}
      <section className="py-20 bg-gradient-to-b from-white/80 to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview - NOW 6 CARDS */}
      <section className="py-20 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Work</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover my diverse portfolio capturing life's most cherished moments across every celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: heroWedding,
                title: 'Wedding',
                subtitle: 'Unforgettable moments',
                link: '/gallery?category=wedding',
                popular: true,
              },
              {
                img: prewedding1,
                title: 'Pre-Wedding',
                subtitle: 'Romantic stories',
                link: '/gallery?category=prewedding',
              },
              {
                img: maternity1,
                title: 'Maternity',
                subtitle: 'Beautiful beginnings',
                link: '/gallery?category=maternity',
              },
              {
                img: events1,
                title: 'Events',
                subtitle: 'Celebration captured',
                link: '/gallery?category=events',
              },
              {
                img: babyShoot1,
                title: 'Baby Shoots',
                subtitle: 'Tiny miracles',
                link: '/gallery?category=baby',
              },
              {
                img: commercial1,
                title: 'Commercial',
                subtitle: 'Brand stories',
                link: '/gallery?category=commercial',
              },
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white/60 backdrop-blur-sm hover:backdrop-blur-md"
                style={{
                  animationDelay: `${index * 100}ms`,
                } as React.CSSProperties}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-4 drop-shadow-md">{item.subtitle}</p>
                  <span className="inline-flex items-center text-gold group-hover:text-rose transition-colors font-medium">
                    View Gallery
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose/10 via-pink/10 to-amber/10">
        <div className="container mx-auto px-4 text-center">
          <GlassCard variant="solid" className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create{' '}
              <span className="gradient-text">Beautiful Memories</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your special day and how I can help capture every precious moment with timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-10 py-4 text-xl shadow-2xl hover:shadow-3xl h-14">
                  Book Your Session
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-primary-foreground px-10 py-4 text-xl h-14">
                  Explore Portfolio
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
