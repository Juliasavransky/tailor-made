'use client';

import {
  Scissors,
  Spool,
  Handbag,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Couture sur mesure',
      description:
        'Donner vie à vos idées – des tissus choisis aux modèles uniques, adaptés à votre style et à vos mesures.',
      features: [
        'Confection personnalisée',
        'Sélection de tissus',
        'Conseil en style',
        'Ajustement parfait garanti',
      ],
      color: 'primary',
    },
    {
      icon: Spool,
      title: 'Réparations & Retouches',
      description:
        'Redonner vie à vos vêtements préférés grâce à des retouches précises et professionnelles.',
      features: [
        'Ourlets & ajustements',
        'Remplacement de fermetures éclair',
        'Restauration de tissus',
        'Mises à jour de style',
      ],
      color: 'secondary',
    },
    {
      icon: Handbag,
      title: 'Produits faits main',
      description:
        'Sacs, accessoires et pièces uniques – chacun réalisé avec amour et souci du détail.',
      features: [
        'Designs uniques',
        'Matériaux de qualité',
        'Couleurs personnalisées',
        'Motifs africains',
      ],
      color: 'accent',
    },
  ];

  return (
    <section
      id='services'
      className='py-20 px-4 md:px-8 lg:px-12 bg-muted/30 relative'
    >
      <div
        className='absolute inset-0 pattern-diamonds opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
        }}
      ></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <Scissors className='text-primary mr-3' size={28} />
            <span className='text-primary font-semibold text-2xl'>
              Nos Services
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-8'>
            Ce que nous{' '}
            <span className='text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              créons
            </span>
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            De la couture sur mesure aux accessoires faits main, nous apportons
            de l’art et de la précision à chaque projet.
          </p>
        </div>

        <div className='grid grig-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className='flex flex-col card-service bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-primary)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-border/30 group animate-fade-in-up fadeInUp 0.8s ease-out forwards'
                style={{ animationDelay: `${index * 0.2}s`, minHeight: '100%' }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 bg-${service.color}`}
                >
                  <Icon className='text-white' size={30} />
                </div>

                <div className='flex flex-col flex-1'>
                  <h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300'>
                    {service.title}
                  </h3>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {service.description}
                  </p>

                  <ul className='space-y-2 mb-4'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-muted-foreground'
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 bg-${service.color}`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-auto pt-2'>
                    <button
                      onClick={() =>
                        document
                          .querySelector('#contact')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className={`w-full border-2 rounded-lg font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 text-${service.color} border-[color:var(--primary)] hover:bg-${service.color} hover:text-white`}
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Appel à l’action */}
        <div className='text-center mt-16'>
          <p className='text-lg text-muted-foreground mb-6'>
            Prêt à donner vie à votre vision ?
          </p>
          <button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='btn-hero w-full xl:w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95'
          >
            Commencez votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
