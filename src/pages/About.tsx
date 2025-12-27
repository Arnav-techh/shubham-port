import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Award, Camera } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import shubham from '@/assets/shubham/shubham-portrait2.png';

interface Testimonial {
  id: number;
  name: string;
  event: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    event: 'Wedding Photography',
    quote: 'Shubham captured our wedding beautifully. Every photo tells a story, and we couldn\'t be happier with the results. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Patel',
    event: 'Maternity Session',
    quote: 'The maternity session was so comfortable and fun. Shubham made me feel at ease, and the photos are absolutely stunning!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram & Meera Joshi',
    event: 'Pre-Wedding Shoot',
    quote: 'Our pre-wedding photos at Mandu Fort turned out magical. Shubham\'s eye for locations and lighting is remarkable.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Deepika Agarwal',
    event: 'Wedding Photography',
    quote: 'Professional, creative, and so easy to work with. Our wedding album is a treasure we\'ll cherish forever.',
    rating: 5,
  },
];

const indoreLocations = [
  'Rajwada Palace',
  'Lal Bagh Palace',
  'Mandu Fort',
  'Patalpani Waterfall',
  'Ralamandal Wildlife Sanctuary',
  'Krishnapura Chhatris',
];

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-up">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={shubham}
                  alt="Shubham Limbodiya - Wedding Photographer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <GlassCard variant="solid" className="absolute -bottom-6 -right-6 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Camera className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">5+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Content */}
            <div className="animate-fade-up animation-delay-200">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hello, I'm <span className="gradient-text">Shubham</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A passionate wedding photographer based in Indore, Madhya Pradesh. With over 5 years
                of experience capturing beautiful moments, I specialize in creating timeless
                photographs that tell your unique love story.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                My journey began with a simple camera and a love for storytelling. Today, I've had
                the privilege of documenting over 100 weddings, countless pre-wedding shoots, and
                beautiful maternity sessions. Each project is a new adventure, and I approach every
                couple with fresh eyes and creative energy.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Camera, value: '100+', label: 'Weddings' },
                  { icon: Award, value: '50+', label: 'Pre-Wedding' },
                  { icon: Star, value: '5★', label: 'Rating' },
                ].map((stat) => (
                  <GlassCard key={stat.label} variant="dark" className="text-center p-4">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-rose" />
                    <p className="font-bold text-xl gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Indore & Beyond</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the beautiful locations around Indore where I love to shoot
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {indoreLocations.map((location) => (
              <GlassCard key={location} variant="solid" className="px-5 py-3 hover-scale">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose" />
                  <span className="font-medium">{location}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 mandala-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Client Stories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What my clients say about their experience
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-3xl mx-auto relative">
            <GlassCard variant="solid" className="text-center px-8 py-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-lg gradient-text">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].event}
                </p>
              </div>
            </GlassCard>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-background shadow-lg hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-background shadow-lg hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-rose w-6'
                      : 'bg-border hover:bg-rose/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
