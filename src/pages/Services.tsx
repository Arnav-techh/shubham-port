import { Link } from 'react-router-dom';
import { Check, Camera, Heart, Baby, Calendar, Briefcase } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

interface ServicePlan {
  icon: typeof Camera;
  title: string;
  description: string;
  features: string[];
}

const services: ServicePlan[] = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Complete coverage of your special day with cinematic storytelling',
    features: [
      'Full day coverage (8-12 hours)',
      'Candid & Traditional shots',
      '500+ edited photos',
      'Same-day photo highlights',
      'Wedding album (30 pages)',
      'Online gallery access',
      'Drone coverage available',
    ],
  },
  {
    icon: Camera,
    title: 'Pre-Wedding Shoot',
    description: 'Romantic couple portraits at stunning Indore locations',
    features: [
      '4-6 hours of shooting',
      'Multiple outfit changes',
      '150+ edited photos',
      'Location scouting included',
      'Props & accessories',
      'Digital delivery',
      'Print-ready files',
    ],
  },
  {
    icon: Baby,
    title: 'Maternity Session',
    description: 'Elegant portraits celebrating the journey of motherhood',
    features: [
      '2-3 hours session',
      'Studio or outdoor',
      '75+ edited photos',
      'Multiple outfit changes',
      'Soft props included',
      'Digital delivery',
      'Couple shots included',
    ],
  },
  {
    icon: Calendar,
    title: 'Events Photography',
    description: 'Professional coverage for corporate events, birthdays & celebrations',
    features: [
      'Full event coverage (4-8 hours)',
      'Candid moments capture',
      '200+ edited photos',
      'Event highlights reel',
      'Group photos organized',
      'Online gallery sharing',
      'Quick turnaround (48 hrs)',
    ],
  },
  {
    icon: Baby,
    title: 'Baby Shoots',
    description: 'Adorable newborn & milestone photography sessions',
    features: [
      '1-2 hours gentle session',
      'Newborn safe lighting',
      '50+ edited photos',
      'Family inclusion',
      'Custom props & setup',
      'Digital gallery delivery',
      'Milestone packages available',
    ],
  },
  {
    icon: Briefcase,
    title: 'Commercial Photography',
    description: 'Professional product, brand & corporate photography solutions',
    features: [
      'Studio product shoots',
      'Brand storytelling',
      'High-res commercial files',
      'Custom retouching',
      'Social media optimized',
      'Bulk editing packages',
      'Fast delivery (24-48 hrs)',
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-28 pb-20 min-h-screen mandala-pattern">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Photography Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully crafted photography packages designed to capture
              every precious moment across weddings, events, families, and brands.
            </p>
          </div>

          {/* 6 Service Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <GlassCard
                  variant="solid"
                  className="h-full flex flex-col p-8 hover-lift transition-all duration-500 group-hover:shadow-2xl group-hover:border-rose/20"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-rose transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Custom Pricing Badge */}
                  <div className="mb-8 flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse" />
                    <span className="text-xl font-semibold text-rose-600 bg-rose/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                      Custom Pricing Available
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10 flex-1">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-primary/20 flex items-center justify-center mt-0.5 shadow-md">
                          <Check className="w-4 h-4 text-rose-500" />
                        </div>
                        <span className="text-foreground/90 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/contact" className="mt-auto group-hover:scale-[1.02] transition-all duration-200">
                    <Button
                      className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm border-rose/30 text-foreground hover:bg-rose hover:text-primary-foreground hover:border-rose"
                    >
                      Book Now
                    </Button>
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Additional Info - Updated */}
          <div className="mt-24 text-center">
            <GlassCard variant="dark" className="max-w-4xl mx-auto p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                Custom Packages Available
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Need a tailored solution for destination weddings, corporate events, product launches, 
                or special milestone celebrations? Let's create your perfect photography experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-12 py-4 text-xl shadow-2xl h-16">
                    Discuss Your Vision
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-primary-foreground px-12 py-4 text-xl h-16">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
