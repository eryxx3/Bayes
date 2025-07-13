'use client';

import Hero from '../components/Hero';
import FeaturedBikes from '../components/FeaturedBikes';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedBikes />
      <Services />
      <Testimonials />
      <Newsletter />
    </main>
  );
}