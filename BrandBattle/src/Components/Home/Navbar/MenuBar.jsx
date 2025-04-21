import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Home, Info, Phone, TrendingUp, Star, Clock, Award, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function MenuBar() {
  const menuItems = useRef([])
  const title = useRef(null)
  const underline = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const tl = gsap.timeline()

    // Set initial state
    gsap.set(title.current, { opacity: 0, y: -50 })
    gsap.set(underline.current, { scaleX: 0, transformOrigin: 'left' })
    gsap.set(menuItems.current, { opacity: 0, x: -40 })

    // Enter animations
    tl.to(title.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(
        underline.current,
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .to(
        menuItems.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate('/')
        console.log('Menu closed')
      },
    })

    tl.to([...menuItems.current].reverse(), {
      opacity: 0,
      x: -40,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power3.in',
    })
      .to(
        underline.current,
        {
          scaleX: 0,
          duration: 0.3,
          ease: 'power3.in',
        },
        '-=0.2'
      )
      .to(
        title.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: 'power3.in',
        },
        '-=0.2'
      )
  }

  return (
    <div className="bg-gradient-to-br from-[#111927] to-[#1b2a4e] w-full h-screen flex flex-col px-4 text-white font-sans overflow-hidden relative">
      {/* Close Icon */}
     

      {/* Title */}
      <h1
        ref={title}
        className="text-[4rem] sm:text-[5.5rem] font-black mb-4 flex items-center gap-4 tracking-tight bg-gradient-to-r from-white via-[#d0d8ff] to-[#3b5bdb] bg-clip-text text-transparent"
      >
        Brand⚔️Battle
      </h1>

      <div
        className="absolute top-6 right-6 text-white cursor-pointer hover:text-[#3b5bdb] transition-all"
        onClick={handleClose}
      >
        <X size={32} />
      </div>

      {/* Underline */}
      <hr
        ref={underline}
        className="border-t-[3px] border-[#fff] w-[80%] rounded-full mb-10"
      />

      {/* Menu Items */}
      <ul className="flex flex-col leading-10 mt-2 gap-2">
        {[
          { icon: <Home size={30} />, label: 'Home' },
          { icon: <Info size={30} />, label: 'About' },
          { icon: <Phone size={30} />, label: 'Contact' },
          { icon: <TrendingUp size={30} />, label: 'Top Comparison' },
          { icon: <Star size={30} />, label: 'Trending Comparison' },
          { icon: <Clock size={30} />, label: 'Newest Comparison' },
          { icon: <Award size={30} />, label: 'All-Time Great Comparison' },
        ].map((item, index) => (
          <li
            key={index}
            ref={(el) => (menuItems.current[index] = el)}
            className="text-[3.9rem] font-extrabold hover:text-[#3b5bdb] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-5 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-3 shadow-md backdrop-blur-md"
          >
            <span className="text-[#6d88ff]">{item.icon}</span> {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar
