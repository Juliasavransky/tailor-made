'use client';
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
    <section
      id='hero'
      className='min-h-screen pt-20 md:pt-40 flex items-center justify-center overflow-hidden'
    >
      {/* Image de fond avec superposition */}
      <div className='absolute inset-0 z-0'>
        <img
          src={heroImage.src}
          alt='Atelier de couture professionnel avec des tissus colorés'
          className='w-full h-full object-cover '
        />
        <div className='absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70'></div>
      </div>

      {/* Contenu */}
      <div
        className='relative z-20 text-center px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-12 md:py-16 lg:py-20 w-[92%] sm:w-[85%] md:w-[80%] lg:w-[72%] xl:w-[60%] max-w-6xl mx-auto backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl'
        style={{
          background: `
         radial-gradient(ellipse 120% 100% at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.01) 70%, transparent 100%),
         radial-gradient(ellipse 100% 80% at 50% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
         radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,255,255,0.1) 0%, transparent 30%),
         radial-gradient(ellipse 60% 40% at 20% 70%, rgba(255,255,255,0.12) 0%, transparent 5%)
       `,
          backdropFilter: 'blur(25px)',
          boxShadow: `
          0 25px 50px rgba(0,0,0,0.25),
         0 0 80px rgba(255,255,255,0.03)
       `,
          mask: `radial-gradient(ellipse 85% 85% at center, black 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 80%, transparent 100%), radial-gradient(ellipse 70% 90% at 25% 30%, transparent 0%, black 10%, transparent 80%), radial-gradient(ellipse 90% 70% at 75% 70%, transparent 0%, black 15%, transparent 85%)`,
        }}
      >
        <div className='animate-fade-in-up  0.4s ease-out forwards'>
          <div className='flex items-center justify-center mb-3 sm:mb-6'>
            <Sparkles
              className='text-secondary mr-2 sm:mr-3 animate-pulse-slow'
              size={24}
            />
            <span className='text-secondary font-semibold text-sm sm:text-lg md:text-2xl'>
              Couture professionnelle
            </span>
            <Sparkles
              className='text-secondary ml-2 sm:ml-3 animate-pulse-slow'
              size={24}
            />
          </div>

          <h1
            className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight'
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
          >
            Design avec <span className='text-secondary'>âme</span>
          </h1>

          <p
            className='text-sm sm:text-base md:text-xl text-white/90 mb-5 sm:mb-6 max-w-sm sm:max-w-2xl mx-auto leading-snug sm:leading-relaxed'
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            Produits faits main et retouches sur mesure.
            <br />
            Une qualité que vous ressentez dans chaque détail.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 mb-8 sm:mb-10'>
            <button
              onClick={() =>
                document
                  .querySelector('#gallery')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='w-[90%] sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-2.5 sm:py-4 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95 group'
            >
              Découvrir la collection
              <Sparkles
                className='ml-2 sm:ml-4 group-hover:animate-spin inline'
                size={18}
              />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='w-[90%] sm:w-auto text-sm sm:text-base px-6 py-2.5 sm:px-6 sm:py-4 rounded-lg font-semibold bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-secondary/90 hover:shadow-[var(--shadow-secondary)] hover:scale-105 active:scale-95 backdrop-blur-sm'
            >
              Contactez-nous dès aujourd’hui
            </button>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className='relative mt-4 w-full flex justify-center'>
          <button
            onClick={scrollToNext}
            className='text-white/80 hover:text-white transition-colors animate-bounce border rounded-full p-2 backdrop-blur-sm hover:shadow-[var(--shadow-elegant)]'
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className='absolute top-20 left-10 w-10 h-10 sm:w-16 sm:h-16 bg-secondary/20 rounded-full animate-float float 3s ease-in-out infinite'></div>
      <div
        className='absolute bottom-32 right-12 sm:right-16 w-10 h-10 sm:w-14 sm:h-14 bg-accent/20 rounded-full animate-float float 3s ease-in-out infinite'
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className='absolute top-1/3 right-6 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-secondary/30 rounded-full animate-float float 3s ease-in-out infinite'
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
};

export default Hero;
