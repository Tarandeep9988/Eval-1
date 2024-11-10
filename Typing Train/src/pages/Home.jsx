import React from 'react'
import EntrySection from '../components/Home/EntrySection'
import WhatIsTypingTrain from '../components/Home/WhatIsTypingClub'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import ToTopArrow from '../components/Home/ToTopArrow'
import Navbar from '../components/Home/Navbar'

function Home() {
  return (
    <>
        <Navbar />
        <EntrySection />
        <WhatIsTypingTrain />
        <Section4 />
        <Section5 />
        <Section6 />
        <ToTopArrow />
    </>
  )
}

export default Home