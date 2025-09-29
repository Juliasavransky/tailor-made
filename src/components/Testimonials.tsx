'use client';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/use-carousel';
import { useMemo, useEffect, useState } from 'react';
import testimonials from '../app/data/testimonials.json';

export const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  // Mise à jour du nombre de cartes selon la taille de l’écran
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Entre 768 et 1024
      } else {
        setVisibleCards(3); // 1024 et plus
      }
    };

    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const { index, next, prev } = useCarousel(testimonials.length, { keyboard: true });

  const displayedTestimonials = useMemo(() => {
    return Array.from({ length: visibleCards }).map((_, i) =>
      testimonials[(index + i) % testimonials.length]
    );
  }, [index, visibleCards]);

  return (
    <section
      id="testimonials"
      className="section-padding py-20 px-4 md:px-8 lg:px-12 bg-muted/30 relative"
    >
      <div className="absolute inset-0 pattern-triangles opacity-5" aria-hidden />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-accent mr-3" size={28} />
            <span className="text-accent font-semibold text-2xl">Témoignages</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Ce que disent nos{' '}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clients
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des histoires vraies de clients satisfaits qui nous font confiance
            pour leurs besoins en couture et en mode.
          </p>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out justify-center"
            style={{ transform: `translateX(0%)` }}
          >
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`w-full px-4 shrink-0 animate-fade-in-up 
                  ${visibleCards === 1 ? 'sm:w-3/4' : ''} 
                  ${visibleCards === 2 ? 'md:w-1/2' : ''} 
                  ${visibleCards === 3 ? 'lg:w-1/3' : ''}`}
              >
                <div className="card-elegant bg-card rounded-xl md:p-8 xs:p-4 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50 relative group">
                  <div className="absolute -top-4 left-8">
                    <div className="bg-primary p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Quote className="text-white" size={20} />
                    </div>
                  </div>

                  <div className="flex items-center mb-6 mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-secondary fill-current" size={20} />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-32 sm:gap-24 mt-16">
            <button
              onClick={prev}
              aria-label="Témoignages précédents"
              className="rounded-full p-2 sm:p-3 bg-primary/50 backdrop-blur-md text-secondary transition-all duration-300 hover:bg-primary/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Témoignages suivants"
              className="rounded-full p-2 sm:p-3 bg-primary/50 backdrop-blur-md text-secondary transition-all duration-300 hover:bg-primary/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-6">
            Prêt à rejoindre nos clients satisfaits ?
          </p>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-hero w-full sm:w-3/4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95"
          >
            Commencez votre aventure
          </button>
        </div>
      </div>
    </section>
  );
};
