'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 100;
      const current = navItems.find((item) => {
        const section = document.querySelector(item.href);
        if (!section) return false;
        const top = section.getBoundingClientRect().top + window.scrollY;
        const bottom = top + section.clientHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (current && current.href !== activeSection) {
        setActiveSection(current.href);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/20'
          : 'bg-background/35 backdrop-blur-md shadow-lg border-b border-border/0'
      } ${isScrolled ? 'py-1' : 'py-3'} md:py-4`}
    >
      <nav className='container mx-auto'>
        <div className='flex items-center justify-between h-auto min-h-[60px]'>
          <Link
            href='/'
            aria-label='back to home page'
            className='group flex items-center transition-[filter] duration-300 ease-in-out hover:[filter:drop-shadow(0_0_2.5em_#AE082F)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-xl'
          >
            <Image
              src='/images/grace logo icon.png'
              alt=''
              width={isScrolled ? 64 : 96}
              height={isScrolled ? 64 : 96}
              className={`object-cover ${
                isScrolled ? 'w-16' : 'w-24'
              } px-2 transition-all duration-300 ease-in-out`}
              priority
            />
            <Image
              src='/images/grace logo text.png'
              alt='Grace'
              width={isScrolled ? 96 : 112}
              height={isScrolled ? 64 : 96}
              className={`object-cover ${
                isScrolled ? 'w-24' : 'w-28'
              } transition-all duration-300 ease-in-out`}
              priority
            />
          </Link>

          <div className='hidden xl:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-700 ease-in-out font-medium hover:text-accent hover:text-xl hover:border-b-2 border-dashed border-current ${
                  activeSection === item.href
                    ? 'text-accent font-semibold border-b-2'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className='btn-outline border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-110 active:scale-95'
            >
              Get Quote
            </button>
          </div>

          <button
            className='xl:hidden p-2 text-foreground/80 hover:text-primary transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className='xl:hidden absolute top-full left-0 right-0 max-h-[75vh] overflow-y-auto 
                  bg-gradient-to-b from-white to-gray-100/90 backdrop-blur-md 
                  border-b border-border/20 shadow-lg scroll-smooth'
          >
            <div className='py-4 px-4 space-y-6 flex flex-col items-center'>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
         className={`relative block w-full text-center transition-all duration-300 ease-in-out font-medium py-2
      ${
        activeSection === item.href
          ? 'text-primary text-lg font-semibold after:block after:w-full after:h-[2px] after:origin-left after:scale-x-0 after:border-b-2 after:border-dashed after:border-current after:mx-auto '
          : 'text-foreground/80 hover:text-primary after:block after:w-full after:h-[2px] after:origin-left after:scale-x-0 after:border-b-2 after:border-dashed after:border-current after:mx-auto hover:after:animate-dash-hover'
      }`}
  >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('#contact')}
                className='btn-outline w-1/3 text-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-105 active:scale-95 mt-4'
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
