
"use client";
import { ArrowDown, Sparkles } from 'lucide-react';
import heroImage from '../../public/images/products-2.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className=" min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage.src} 
          alt="Professional tailor workshop with colorful fabrics"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

   

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-4xl mx-auto bg-background/30 rounded-lg py-10 backdrop-blur-md shadow-[var(--shadow-elegant)]">
        <div className="animate-fade-in-up fadeInUp 0.8s ease-out forwards">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-secondary mr-3 animate-pulse-slow" size={32} />
            <span className="text-secondary font-semibold text-lg md:text-3xl">
              Professional Tailoring
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-lg" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.15)' }}>
            Design with
            <span className=" text-secondary"> Soul</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-shadow" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Handmade products and custom repairs. <br />Quality you can feel in every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-12">
            <button 
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero bg-gradient-to-r from-primary to-accent text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95group"
            >
              Discover the Collection
              <Sparkles className="ml-6 group-hover:animate-spin inline " size={20} />
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary/90 hover:shadow-[var(--shadow-secondary)] hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce  border rounded-full p-2 backdrop-blur-sm hover:shadow-[var(--shadow-elegant)]"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float float 3s ease-in-out infinite"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float float 3s ease-in-out infinite" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-secondary/30 rounded-full animate-float float 3s ease-in-out infinite" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;