'use client';
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import GoogleMapsEmbed from './GoogleMapsEmbed';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: 'Message Sent!',
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id='contact'
      className='section-padding py-20 px-4 md:px-8 lg:px-12 bg-background relative'
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 pattern-diamonds   background-image: 
      linear-gradient(45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
      linear-gradient(-45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%),
      linear-gradient(-45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%);
    background-size: 30px 30px;
    background-position: 0 0, 0 15px, 15px -15px, -15px 0px; opacity-5'
      ></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <Mail className='text-primary mr-3' size={28} />
            <span className='text-primary font-semibold text-2xl'>
              Get In Touch
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-8'>
            Let's{' '}
            <span className='text-gradient-warm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
              Create Together
            </span>
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Get in touch for custom orders, repairs, or any questions – via the
            form, WhatsApp, or visit us in person.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
          {/* Contact Form */}
          <div className='animate-slide-in-left slideInLeft 0.8s ease-out forwards'>
            <div className='card-elegant bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50'>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='Your full name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='your@email.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none'
                    placeholder='Tell us about your project or inquiry...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='btn-hero w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95w-full group'
                >
                  Send Message
                  <Send
                    className='ml-2 group-hover:translate-x-1 transition-transform duration-300'
                    size={20}
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className=' animate-slide-in-right slideInRight 0.8s ease-out forwards space-y-8'>
            {/* Location */}
            <div className='flex items-start space-x-4'>
              <div className='bg-primary/10 p-4 rounded-2xl'>
                <MapPin className='text-primary' size={24} />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-foreground mb-2'>
                  Visit Our Studio
                </h4>
                <p className='text-muted-foreground'>
                  3, Rue Fefnand Raynaud
                  <br />
                  63360 Gerzat
                  <br />
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-start space-x-4'>
              <div className='bg-secondary/10 p-4 rounded-2xl'>
                <Phone className='text-secondary' size={24} />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-foreground mb-2'>
                  Call Us
                </h4>
                <p className='text-muted-foreground'>
                  <a
                    href='tel:+33                     06 59 14 98 99
'
                    className='hover:text-secondary transition-colors'
                  >
                    06 59 14 98 99
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className='flex items-start space-x-4'>
              <div className='bg-accent/10 p-4 rounded-2xl'>
                <Clock className='text-accent' size={24} />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-foreground mb-2'>
                  Working Hours
                </h4>
                <p className='text-muted-foreground '>
                  Mardi : 10:00-12:30, 14:00-18:30
                  <br />
                  Mercredi : 10:00-12:30, 14:00-18:30
                  <br />
                  Jeudi : 10:00-12:30, 14:00-18:30
                  <br />
                  Vendredi : 10:00-12:30, 14:00-18:30
                  <br />
                  Samedi : 10:00-12:30, 14:00-18:30
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className='bg-muted/30 rounded-3xl p-8 text-center'>
              <MapPin
                className='mx-auto text-muted-foreground mb-4'
                size={48}
              />
              <h4 className='text-lg font-semibold text-foreground mb-2'></h4>
              <h3 className='text-muted-foreground'>
                Find us easily with GPS coordinates and detailed directions to
                our studio location.
              </h3>
              <GoogleMapsEmbed />
            </div>

            {/* Social Links */}
            <div className='flex items-center space-x-4 pt-6'>
              <span className='text-foreground font-semibold'>Follow us:</span>
              <a
                href='#'
                className='bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300'
              >
                <Instagram size={20} />
              </a>
              <a
                href='#'
                className='bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300'
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
