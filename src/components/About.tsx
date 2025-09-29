'use client';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section
      id='about'
      className='section-padding py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-background relative'
    >
      {/* Motif de fond */}
      <div
        className='absolute inset-0 pattern-triangles'
        style={{
          backgroundImage: `
            linear-gradient(60deg, hsl(var(--primary) / 0.1) 25%, transparent 25%),
            linear-gradient(-60deg, hsl(var(--secondary) / 0.08) 25%, transparent 25%)`,
          backgroundSize: '40px 70px',
          opacity: 0.05,
        }}
      ></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-10 sm:mb-16'>
          <div className='flex items-center justify-center mb-4 sm:mb-6'>
            <Heart className='text-accent mr-3' size={24} />
            <span className='text-accent font-semibold text-xl sm:text-2xl'>
              Notre Histoire
            </span>
          </div>

          <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 sm:mb-10'>
            Confectionné avec{' '}
            <span className='text-gradient-warm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
              Passion
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-start'>
          {/* Contenu */}
          <div className='animate-slide-in-left'>
            <p className='text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed sm:leading-loose mb-8 sm:mb-10 max-w-prose'>
              <span className='text-accent font-semibold'>Grace Couture </span>
              propose une large gamme de services pour répondre à tous vos besoins
              en matière de couture et de retouches. Que vous souhaitiez raccourcir
              un pantalon, réparer une fermeture éclair ou personnaliser un vêtement
              avec une broderie, notre atelier est là pour vous accompagner. Nous
              prêtons attention à chaque détail, qu’il s’agisse de petites
              transformations comme un ourlet invisible ou de projets plus
              complexes tels que la confection de rideaux sur mesure. Notre
              expertise couvre également les vêtements en cuir, les doublures et les
              personnalisations. Chez Grace Couture, chaque projet est réalisé avec
              soin et précision afin de garantir votre satisfaction. 
              <span className='text-primary font-semibold'> professionnalisme</span>, 
              <span className='text-secondary font-semibold'> élégance</span> et 
              <span className='text-accent font-semibold'> créativité</span>.
            </p>
          </div>

          {/* Élément visuel */}
          <div className='animate-slide-in-right'>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 xs:p-2 sm:p-8 md:p-10 backdrop-blur-sm max-w-md mx-auto'>
                <div className='text-center flex flex-col items-center'>
                  <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4 sm:mb-6'>
                    <Heart className='text-white animate-heartbeat' size={28} />
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-foreground mb-3'>
                    Promesse de Qualité
                  </h3>

                  <p className='text-sm sm:text-base text-muted-foreground leading-normal mb-4 text-center'>
                    Chaque pièce est réalisée avec le plus grand soin, garantissant
                    durabilité, confort et un style qui dépasse vos attentes.
                  </p>

                  <img
                    src='/images/grace logo icon.png'
                    alt='logo'
                    className='object-contain w-28 sm:w-36 md:w-44'
                  />
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className='absolute -top-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse-slow'></div>
              <div
                className='absolute -bottom-4 -left-4 w-5 h-5 bg-accent rounded-full animate-pulse-slow'
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
