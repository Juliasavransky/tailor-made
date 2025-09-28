'use client';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section
      id='about'
      className='section-padding py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-background relative'
    >
      {/* Background Pattern */}
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
              Our Story
            </span>
          </div>

          <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 sm:mb-10'>
            Crafted with{' '}
            <span className='text-gradient-warm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
              Passion
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-start'>
          {/* Content */}
          <div className='animate-slide-in-left'>
            <p className='text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed sm:leading-loose mb-8 sm:mb-10 max-w-prose'>
              <span className='text-accent font-semibold'>Grace Couture </span>
              offre une large gamme de services pour répondre à tous vos besoins
              en matière de couture et de retouches. Que vous ayez besoin de
              raccourcir un pantalon, de réparer une fermeture éclair ou de
              personnaliser un vêtement avec une broderie, notre atelier est là
              pour vous aider. Nous prenons soin de chaque détail, qu'il
              s'agisse de transformations mineures comme un ourlet invisible ou
              de projets plus complexes tels que la confection de rideaux sur
              mesure. Notre expertise inclut également les vêtements en cuir,
              les doublures, et les customisations. Chez Grace Couture, chaque
              projet est réalisé avec soin et précision pour garantir votre
              satisfaction. Cette description a été générée automatiquement et
              peut comporter des erreurs, pour la modifier ou la supprimer,
              cliquez ici.
              <span className='text-primary font-semibold'>
                {' '}professionalism
              </span>
              ,<span className='text-secondary font-semibold'> elegance</span>,
              and
              <span className='text-accent font-semibold'> creativity</span>.
            </p>
          </div>

          {/* Visual Element */}
          <div className='animate-slide-in-right'>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 xs:p-2 sm:p-8 md:p-10 backdrop-blur-sm max-w-md mx-auto'>
                <div className='text-center flex flex-col items-center'>
                  <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4 sm:mb-6'>
                    <Heart className='text-white' size={28} />
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-foreground mb-3'>
                    Quality Promise
                  </h3>

                  <p className='text-sm sm:text-base text-muted-foreground leading-normal mb-4 text-center'>
                    Every piece is crafted with attention to detail, ensuring
                    durability, comfort, and style that exceeds expectations.
                  </p>

                  <img
                    src='/images/grace logo icon.png'
                    alt='logo'
                    className='object-contain w-28 sm:w-36 md:w-44'
                  />
                </div>
              </div>

              {/* Decorative Elements */}
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
