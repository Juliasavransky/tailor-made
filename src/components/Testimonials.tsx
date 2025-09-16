'use client';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      content:
        'Absolutely stunning work! The attention to detail and the beautiful African-inspired patterns make every piece unique. My custom bag is now my favorite accessory.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Executive',
      content:
        'Professional tailoring at its finest. They transformed my old suit into something that fits perfectly and looks amazing. Highly recommend their alteration services.',
      rating: 5,
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Amara Williams',
      role: 'Artist',
      content:
        "The handmade accessories are works of art! Each piece tells a story and the craftsmanship is exceptional. I've ordered multiple items and they're all perfect.",
      rating: 5,
      avatar: 'AW',
    },
  ];

  return (
    <section
      id='testimonials'
      className='section-padding py-20 px-4 md:px-8 lg:px-12 bg-muted/30 relative'
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
            <Star className='text-accent mr-3' size={28} />
            <span className='text-accent font-semibold text-2xl'>
              Testimonials
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-8'>
            What Our{' '}
            <span className='text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Customers Say
            </span>
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Real stories from satisfied customers who trust us with their
            tailoring and fashion needs.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className='card-elegant bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in-up fadeInUp 0.8s ease-out forwards relative group'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className='absolute -top-4 left-8'>
                <div className='bg-primary p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300'>
                  <Quote className='text-white' size={20} />
                </div>
              </div>

              {/* Rating */}
              <div className='flex items-center mb-6 mt-6'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='text-secondary fill-current'
                    size={20}
                  />
                ))}
              </div>

              {/* Content */}
              <p className='text-muted-foreground text-lg leading-relaxed mb-8 italic'>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4'>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>
                    {testimonial.name}
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-lg text-muted-foreground mb-6'>
            Ready to join our satisfied customers?
          </p>
          <button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='btn-hero bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95'
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};
