'use client';

import {
  Scissors,
  Wrench,
  ShoppingBag,
  Spool,
  Wand,
  WandSparkles,
  Handbag,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Custom Tailoring',
      description:
        'Bringing your ideas to life – from chosen fabrics to unique designs, tailored to your style and measurements.',
      features: [
        'Made-to-measure',
        'Fabric selection',
        'Personal styling',
        'Perfect fit guarantee',
      ],
      color: 'primary',
    },
    {
      icon: Spool,
      title: 'Repairs & Alterations',
      description:
        'Reviving favorite garments with precise, professional repairs and adjustments.',
      features: [
        'Hemming & sizing',
        'Zipper replacement',
        'Fabric restoration',
        'Style updates',
      ],
      color: 'secondary',
    },
    {
      icon: Handbag,
      title: 'Handmade Products',
      description:
        'Bags, accessories, and fashion pieces – each one unique, crafted with love and attention to detail.',
      features: [
        'Unique designs',
        'Quality materials',
        'Custom colors',
        'African patterns',
      ],
      color: 'accent',
    },
  ];

  return (
    <section
      id='services'
      className=' py-20 px-4 md:px-8 lg:px-12 bg-muted/30 relative'
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 pattern-diamonds   background-image: 
      linear-gradient(45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
      linear-gradient(-45deg, hsl(var(--accent) / 0.1) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%),
      linear-gradient(-45deg, transparent 75%, hsl(var(--secondary) / 0.1) 75%);
    background-size: 30px 30px;
    background-position: 0 0, 0 15px, 15px -15px, -15px 0px;opacity-10'
      ></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <Scissors className='text-primary mr-3' size={28} />
            <span className='text-primary font-semibold text-2xl'>
              Our Services
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-8'>
            What We{' '}
            <span className='text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent '>
              Create
            </span>
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            From custom tailoring to handmade accessories, we bring artistry and
            precision to every project.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className='card-service bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-primary)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-border/30 group animate-fade-in-up fadeInUp 0.8s ease-out forwards'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='text-white' size={30} />
                </div>
                <div className='h-72 flex flex-col'>
                  <h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300'>
                    {service.title}
                  </h3>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {service.description}
                  </p>

                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-muted-foreground'
                      >
                        <div
                          className={`w-2 h-2 bg-${service.color} rounded-full mr-3`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`w-full btn-outline border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-105 active:scale-95;} 
                    border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-lg text-muted-foreground mb-6'>
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='btn-hero w-2/5 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95'
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
