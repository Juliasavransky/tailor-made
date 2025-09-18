'use client';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <section
      id='contact'
      className='section-padding py-20 px-4 md:px-8 lg:px-12 bg-background relative'
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 pattern-diamonds background-image: 
        linear-gradient(45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
        linear-gradient(-45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%),
        linear-gradient(-45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%);
        background-size: 30px 30px;
        background-position: 0 0, 0 15px, 15px -15px, -15px 0px; opacity-5'
      />

      <div className='container mx-auto relative z-10'>
        {/* Header */}
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

        {/* Grid */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch'>
          {/* Left: Form card */}
          <div className='animate-slide-in-left'>
            <ContactForm />
          </div>

          {/* Right: Info card (זהה בסטייל לקארד של הטופס) */}
          <div className='animate-slide-in-right'>
            <div className='card-elegant bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col'>
              {/* בלוקים עליונים */}
              <div className='space-y-8 text-start'>
                {/* Location */}
                <div className='flex items-start gap-10'>
                  <div className='bg-primary/10 p-4 rounded-2xl'>
                    <MapPin className='text-primary' size={24} />
                  </div>
                  <div>
                    <h4 className='text-xl  font-semibold text-foreground mb-2'>
                      Visit Our Studio
                    </h4>
                    <p className='text-muted-foreground'>
                      3, Rue Fernand Raynaud
                      <br />
                      63360 Gerzat
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start gap-10'>
                  <div className='bg-secondary/10 p-4 rounded-2xl'>
                    <Phone className='text-secondary' size={24} />
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-foreground mb-2'>
                      Call Us
                    </h4>
                    <p className='text-muted-foreground'>
                      <a
                        href='tel:+33659149899'
                        className='hover:text-secondary transition-colors'
                      >
                        06 59 14 98 99
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className='flex items-start gap-10 pb-6'>
                  <div className='bg-accent/10 p-4 rounded-2xl'>
                    <Clock className='text-accent' size={24} />
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-foreground mb-2'>
                      Working Hours
                    </h4>
                    <p className='text-muted-foreground'>Mardi – Samedi:</p>
                    <p className='text-muted-foreground'>
                      10:00–12:30, 14:00–18:30
                    </p>
                  </div>
                </div>
              </div>

              {/* אזור תחתון – מיושר לתחתית כמו הכפתור של הטופס */}
              <div className='mt-auto space-y-6'>
                <GoogleMapsEmbed />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-foreground font-semibold'>Follow us:</span>
            <a
              target='_blank'
              href='https://www.facebook.com/profile.php?id=61573415275658&locale=fr_FR'
              className='bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300'
            >
              <Instagram size={20} />
            </a>
            <a
              target='_blank'
              href='https://www.facebook.com/profile.php?id=61573415275658&locale=fr_FR'
              className='bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300'
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
