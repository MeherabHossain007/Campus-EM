import EventCardList from '@/components/EventCard'
import FeaturedEventHero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import React from 'react'

function Dashboard() {
  return (
    <div data-theme="light" className=" h-screen">
      <NavBar/>
      <FeaturedEventHero/>
      <section className='bg-base-100'>
        <EventCardList data-theme="light"/>
      </section>
    </div>
  )
}

export default Dashboard