import { Link } from 'react-router-dom';
import { Check, Camera, Heart, Baby } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';

interface ServicePlan {
  icon: typeof Camera;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const services: ServicePlan[] = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    price: '₹25,000+',
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
    popular: true,
  },
  {
    icon: Camera,
    title: 'Pre-Wedding Shoot',
    price: '₹12,000+',
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
    price: '₹8,000+',
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
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-28 pb-20 min-h-screen mandala-pattern">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Services & Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted photography packages designed to capture
              every precious moment of your journey.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`relative animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <GlassCard
                  variant="solid"
                  className={`h-full flex flex-col hover-lift ${
                    service.popular ? 'ring-2 ring-rose/50 shadow-xl' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">{service.price}</span>
                    <span className="text-muted-foreground ml-2">onwards</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-rose" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/contact" className="mt-auto">
                    <Button
                      className={`w-full ${
                        service.popular
                          ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground'
                          : 'bg-secondary text-foreground hover:bg-rose hover:text-primary-foreground'
                      }`}
                    >
                      Book Now
                    </Button>
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <GlassCard variant="dark" className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">Custom Packages Available</h3>
              <p className="text-muted-foreground mb-4">
                Need a tailored package for your specific requirements? I offer customized
                solutions for destination weddings, corporate events, and special occasions.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-rose text-rose hover:bg-rose hover:text-primary-foreground">
                  Discuss Your Requirements
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
