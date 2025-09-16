"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useCarousel } from "../hooks/use-carousel";
import { useRef } from "react";
import galleryitems from '../app/data/galleryItem.json';
import type { GalleryItem } from '../../src/types/gallery.t';




export default function Gallery() {
const GALLERY: GalleryItem[] = galleryitems;

  const { index, next, prev, goTo } = useCarousel(GALLERY.length, { keyboard: true });
  const contactRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="gallery"
      className="section-padding py-20 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden"
      aria-label="Gallery"
    >
      <div aria-hidden className="absolute inset-0 pattern-geometric opacity-5" />

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Eye className="text-secondary mr-3" size={28} aria-hidden />
            <span className="text-secondary font-semibold text-2xl">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            <span className="text-gradient-warm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Creative</span> Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our collection – handmade pieces with bold colors and unique style.
          </p>
        </header>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              role="listbox"
              aria-live="polite"
            >
              {GALLERY.map((item, i) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 relative"
                  role="option"
                  aria-selected={i === index}
                >
                  <div className="relative w-full h-[400px] md:h-[600px]">
                    <Image
                      src={item.src}
                      alt={item.alt ?? item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute flex flex-col m-auto rounded-t-3xl items-center w-fit bg-background/10 backdrop-blur-md bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-secondary/40 backdrop-blur-md text-secondary transition-all duration-300 hover:bg-primary/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <ChevronLeft size={30} aria-hidden />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-secondary/40 backdrop-blur-md text-secondary transition-all duration-300 hover:bg-primary/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <ChevronRight size={30} aria-hidden />
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {GALLERY.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring ${
                  isActive ? "border-primary shadow-lg scale-110" : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to \"${item.title}\"`}
                aria-current={isActive ? "true" : undefined}
              >
                <Image
                  src={item.src}
                  alt={item.alt ?? item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-2xl text-muted-foreground mb-6">
            Love what you see? Let&apos;s create something unique for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="btn-hero bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95"
            >
              Commission a Piece
            </button>
            <button
              type="button"
              onClick={() => servicesRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-primary)] hover:scale-105 active:scale-95"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
