import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 7879860010',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@shubhamlimbodiya.com',
    link: 'mailto:hello@shubhamlimbodiya.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Vijay Nagar, Indore, MP',
    link: 'https://maps.google.com/?q=Vijay+Nagar+Indore',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 10 AM - 8 PM',
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon!',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const whatsappMessage = encodeURIComponent(
    'Hi Shubham! I\'m interested in booking a photography session. Can we discuss the details?'
  );

  return (
    <Layout>
      <section className="pt-28 pb-20 min-h-screen mandala-pattern">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Let's discuss your requirements
              and create something beautiful together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <GlassCard key={info.title} variant="solid" className="hover-lift">
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/917879860010?text=Hi%20Shubham,%0A%0AI%27m%20interested%20in%20booking%20a%20photography%20session%20(Wedding/Pre-Wedding/Maternity).%0A%0APlease%20share%20your%20availability%20and%20pricing%20details.%0A%0AThanks!`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                >
                <GlassCard
                  variant="solid"
                  className="bg-green-50 hover:bg-green-100 border-green-200 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Chat on WhatsApp</p>
                        <p className="text-sm text-green-600">Quick response guaranteed</p>
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </a>

              {/* Map */}
              <GlassCard variant="solid" className="overflow-hidden p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117633.29999999999!2d75.80128400000001!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shubham Limbodiya Photography - Indore Location"
                  className="rounded-lg"
                />
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard variant="solid" className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="gradient-text">Book a Session</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-background/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="prewedding">Pre-Wedding</option>
                      <option value="maternity">Maternity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                      Event Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your event, requirements, or any questions..."
                    rows={4}
                    className="bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
