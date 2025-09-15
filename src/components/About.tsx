'use client';
import { Heart, Scissors, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section
      id='about'
      className='section-padding py-20 px-4 md:px-8 lg:px-12 bg-background relative'
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 pattern-triangles     background-image: 
      linear-gradient(60deg, hsl(var(--primary) / 0.1) 25%, transparent 25%),
      linear-gradient(-60deg, hsl(var(--secondary) / 0.08) 25%, transparent 25%);
    background-size: 40px 70px; opacity-5'
      ></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <Heart className='text-accent mr-3' size={28} />
            <span className='text-accent font-semibold text-lg'>Our Story</span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-8'>
            Crafted with{' '}
            <span className='text-gradient-warm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
              Passion
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Content */}
          <div className='animate-slide-in-left slideInLeft 0.8s ease-out forwards'>
            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-8'>
               <span className='text-accent font-semibold'>Grace Couture </span>
               
              offre une large gamme de services pour répondre à
              tous vos besoins en matière de couture et de retouches. Que vous
              ayez besoin de raccourcir un pantalon, de réparer une fermeture
              éclair ou de personnaliser un vêtement avec une broderie, notre
              atelier est là pour vous aider. Nous prenons soin de chaque
              détail, qu'il s'agisse de transformations mineures comme un ourlet
              invisible ou de projets plus complexes tels que la confection de
              rideaux sur mesure. Notre expertise inclut également les vêtements
              en cuir, les doublures, et les customisations. Chez Grace Couture,
              chaque projet est réalisé avec soin et précision pour garantir
              votre satisfaction. Cette description a été générée
              automatiquement et peut comporter des erreurs, pour la modifier ou
              la supprimer, cliquez ici.


              <span className='text-primary font-semibold'>
                {' '}
                professionalism
              </span>
              ,<span className='text-secondary font-semibold'> elegance</span>,
              and
              <span className='text-accent font-semibold'> creativity</span>.
            </p>

            {/* <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-8'>
              Discover handmade products and custom tailoring services where
              every stitch is crafted with care and precision.
            </p> */}

            <div className='grid sm:grid-cols-2 gap-6'>
              <div className='flex items-start space-x-4'>
                <div className='bg-primary/10 p-3 rounded-lg'>
                  <Scissors className='text-primary' size={24} />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    Expert Craftsmanship
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Years of experience in custom tailoring
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-secondary/10 p-3 rounded-lg'>
                  <Sparkles className='text-secondary' size={24} />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    Unique Designs
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Each piece tells its own story
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className='animate-slide-in-right slideInRight 0.8s ease-out forwards'>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm'>
                <div className='text-center'>
                  <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6'>
                    <Heart className='text-white' size={32} />
                  </div>

                  <h3 className='text-2xl font-bold text-foreground mb-4'>
                    Quality Promise
                  </h3>

                  <p className='text-muted-foreground leading-relaxed'>
                    Every piece is crafted with attention to detail, ensuring
                    durability, comfort, and style that exceeds expectations.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-pulse-slow pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'></div>
              <div
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-slow pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
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
