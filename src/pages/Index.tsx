import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Camera, Heart, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding1 from '@/assets/prewedding-1.jpg';
import maternity1 from '@/assets/maternity-1.jpg';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';

const heroImages = [heroWedding, prewedding1, weddingCeremony, maternity1];

const stats = [
  { number: '100+', label: 'Wedding Stories', icon: Heart },
  { number: '50+', label: 'Pre-Wedding Shoots', icon: Camera },
  { number: '30+', label: 'Maternity Sessions', icon: Users },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 mandala-pattern overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-light/20 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            {/* Hero Image */}
            <div
              className="relative w-full max-w-3xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={heroImages[currentSlide]}
                alt="Wedding Photography by Shubham Limbodiya"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-primary-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-primary-foreground" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary-foreground w-6'
                        : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Info Card */}
            <GlassCard variant="solid" className="w-full max-w-2xl text-center animate-fade-up animation-delay-200">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                <span className="gradient-text">Shubham Limbodiya</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                Wedding Photographer • Indore
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed max-w-lg mx-auto">
                Capturing timeless moments of love, joy, and celebration. 
                Let me tell your beautiful story through my lens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gallery">
                  <Button variant="outline" className="w-full sm:w-auto border-rose text-rose hover:bg-rose hover:text-primary-foreground">
                    View Portfolio
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-primary-foreground">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <GlassCard
                key={stat.label}
                variant="solid"
                className={`text-center hover-lift animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the beautiful stories I've had the privilege to capture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: heroWedding, title: 'Wedding', link: '/gallery?category=wedding' },
              { img: prewedding1, title: 'Pre-Wedding', link: '/gallery?category=prewedding' },
              { img: maternity1, title: 'Maternity', link: '/gallery?category=maternity' },
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover-lift animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center text-sm text-primary-foreground/80 group-hover:text-gold transition-colors">
                    View Gallery
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose/10 via-pink/10 to-amber/10">
        <div className="container mx-auto px-4 text-center">
          <GlassCard variant="solid" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create <span className="gradient-text">Beautiful Memories</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your special day and how I can help capture every precious moment.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 text-lg">
                Get in Touch
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
