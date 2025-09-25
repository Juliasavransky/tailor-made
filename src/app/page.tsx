"use client";
import { useEffect } from 'react'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import {Testimonials} from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  useEffect(() => {
    // זה רץ רק בclient side, אחרי שהדף נטען
    console.log('=== PAGE DEBUG INFO ===')
    console.log('URL:', window.location.href)
    console.log('Hash:', window.location.hash)
    console.log('Scroll Position:', window.scrollY)
    console.log('Document Height:', document.documentElement.scrollHeight)
    console.log('Window Height:', window.innerHeight)
    
    // בדיקה אם יש אלמנט שמקבל focus
    console.log('Active Element:', document.activeElement)
    
    // בדיקה לאחר 2 שניות (אחרי שהכל נטען)
    setTimeout(() => {
      console.log('=== AFTER 2 SECONDS ===')
      console.log('Scroll Position:', window.scrollY)
      console.log('Did scroll change?')
    }, 2000)
    
  }, []) // empty dependency - רץ רק פעם אחת כשהקומפוננטה נטענת

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

