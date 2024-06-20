import EventCardList from '@/components/EventCard'
import { FeaturedCategories } from '@/components/EventCatgories'
import Footer from '@/components/Footer'
import FeaturedEventHero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import { Statistics } from '@/components/Statstic'
import { Testimonials } from '@/components/Testimonials'
import React from 'react'

function Dashboard() {
  return (
    <div data-theme="light" className=" h-screen">
      <NavBar />
      <FeaturedEventHero />
      <section className="bg-base-100">
        <EventCardList data-theme="light" />
      </section>
      <FeaturedCategories />
      <Testimonials />
      <Statistics />
      <Footer />
    </div>
  );
}

export default Dashboard