'use client';
import { ArrowUp, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Modal from './Modal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className='bg-primary text-primary-foreground relative overflow-hidden
    w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] 
    '
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 pattern-geometric    background-image: 
      radial-gradient(circle at 25% 25%, hsl(var(--secondary) / 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
      linear-gradient(45deg, hsl(var(--primary) / 0.05) 25%, transparent 25%),
      linear-gradient(-45deg, hsl(var(--secondary) / 0.05) 25%, transparent 25%);
    background-size: 60px 60px, 60px 60px, 40px 40px, 40px 40px;
    background-position: 0 0, 30px 30px, 0 0, 20px 20px; opacity-10'
      ></div>

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 lg:px-8 py-16'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-start'>
            {/* Brand */}
            <div className='lg:col-span-2 flex flex-col items-start'>
              <h3 className='text-3xl  font-bold text-secondary mb-4'>
                Tailor Studio
              </h3>
              <p className=' text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md'>
                Professional tailoring with soul. Creating handmade products and
                custom garments where every stitch tells a story of
                craftsmanship and creativity.
              </p>
              <div className='flex items-center space-x-4'>
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
                <a
                  target='_blank'
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=gracecouture63360@gmail.com&su=Demande depuis le site&body=Bonjour, je souhaiterais obtenir plus d’informations sur vos services de couture.'
                  className='bg-secondary text-secondary-foreground p-3
                  rounded-full hover:scale-110 transition-transform
                  duration-300'
                >
                  <Mail size={20} />
                </a>
                <a
                  href='tel:+33-0659149899'
                  className='bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform duration-300'
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-xl font-semibold text-secondary mb-6'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {[
                  { label: 'Home', href: '#hero' },
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Gallery', href: '#gallery' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className='text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-left'
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className='text-xl font-semibold text-secondary mb-6'>
                Contact Info
              </h4>
              <div className='space-y-4 text-primary-foreground/80 flex flex-col items-base'>
                <p>
                  3, Rue Fefnand Raynaud
                  <br />
                  63360 Gerzat
                  <br />
                  France
                </p>
                <p>
                  <a
                    href='tel:+33-0659149899'
                    className='hover:text-secondary transition-colors'
                  >
                    06 59 14 98 99
                  </a>
                </p>
                <p className='break-all '>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-primary-foreground/20'>
          <div className='container mx-auto px-4 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <p className='text-primary-foreground/60 text-sm mb-4 md:mb-0'>
                © {new Date().getFullYear()} All Rights Reserved – Grace
                Couture. Design & Development by Web_Witch Design studio{'  '}
                <a
                  href='https://www.webwitch.click/en/home'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white underline hover:text-blue-600 transition'
                >
                  <Image
                    src='/svg/webWitchLogo yellow.svg'
                    alt='Web Witch Logo'
                    width={250}
                    height={45}
                    className='inline h-20 w-auto '
                  />
                </a>
              </p>
               <Modal triggerLabel="Conditions d’utilisation" />                      
              

              <button
                onClick={scrollToTop}
                className='bg-secondary/20 hover:bg-secondary text-secondary hover:text-secondary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 group'
              >
                <ArrowUp
                  size={20}
                  className='group-hover:-translate-y-1 transition-transform duration-300'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
