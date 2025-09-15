'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll(); // עדכון מיד אחרי mount (אם העמוד נטען באמצע גלילה)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/20'
          : 'bg-background/35 backdrop-blur-md shadow-lg border-b border-border/0'
      }`}
    >
      <nav className='container mx-auto'>
        <div className=' flex items-center justify-between h-24 lg:h-24'>
          {/* Logo */}
          <div className='flex items-center h-24 will-change-[filter] transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_2.5em_#AE082F)] '>
            <img
              src='/images/grace logo icon.png'
              alt='logo'
              sizes='(max-width: 768px) 100vw, 1024px'
              className='object-cover w-24 px-2'
            />
            <img
              src='/images/grace logo text.png'
              alt='logo'
              sizes='(max-width: 768px) 100vw, 1024px'
              className='object-cover w-28'
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className='text-foreground hover:text-accent hover:text-bold hover:text-2xl hover:border-b-2 border-current border-dashed
                           transition-colors hover:ease-in-out duration-600 font-medium'
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className='btn-outline border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-110 active:scale-95}'
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-foreground/80 hover:text-primary transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20 shadow-lg'>
            <div className='py-4 px-4 space-y-4'>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className='block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2'
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className='btn-outline border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-105 active:scale-95;
  }w-full justify-center mt-4'
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
