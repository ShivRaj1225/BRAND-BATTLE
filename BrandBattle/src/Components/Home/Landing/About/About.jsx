import React from 'react'
import HeroSection from './HeroSection'
import StorySection from './StorySection'
import VisionSection from './VisionSection'
import TeamSection from './TeamSection'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#192654] via-[#070c1e] to-[#213075] text-white">
      <HeroSection />
      <StorySection />
      <VisionSection />
      <TeamSection />
    </div>
  )
}

export default About
