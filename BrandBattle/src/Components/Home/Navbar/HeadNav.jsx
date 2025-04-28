import React, { useRef } from 'react'
import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap' // Import GSAP
import Logo from '../../../assets/Images/Logo.png'

function HeadNav() {
    const navigate = useNavigate();
    const slideRef = useRef(null); // Ref for the sliding animation

    const handleMenuClick = () => {
        // Trigger GSAP animation
        gsap.to(slideRef.current, {
            y: 0, // Slide down to 0
            duration: 1, // Animation duration
            ease: 'power3.out', // Smooth easing
            onComplete: () => {
                navigate('/menubar'); // Navigate after animation
            },
        });
    };

    const handleLoginClick = () => {
        navigate('/signin'); // Navigate to login page
    }

    return (
        <div className='bg-[#eef3fd] fixed w-full h-16 flex justify-between items-center px-6 py-10 font-sans shadow-sm relative'>
            {/* Sliding Animation */}
            <div
                ref={slideRef}
                className="absolute top-[-100%] left-0 w-full h-full bg-[#192654] z-50"
                style={{ transform: 'translateY(-100%)' }} // Initial position off-screen
            ></div>

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={Logo} alt="BrandBattle Logo" className="h-12 w-auto" />
                <h1 className="text-[#1b1f3b] text-xl font-light tracking-wide">B&B.COM</h1>
            </div>

            {/* Navigation */}
            <div className='hidden md:flex items-center gap-8 text-[#1b1f3b] font-light cursor-pointer'>
                <li className="list-none hover:text-[#3b5bdb]">Home</li>
                <li className="list-none hover:text-[#3b5bdb]">About</li>
                <li className="list-none hover:text-[#3b5bdb]">Contact</li>
                <li className="list-none hover:text-[#3b5bdb]">Top Comparison</li>
                <button className='bg-transparent border-solid border-2 border-[#192654] text-[#0b0f3c] px-4 py-1.5 rounded-lg hover:bg-[#192654] hover:text-white transition-all'
                    onClick={handleLoginClick}>
                    Login
                </button>
                <div
                    className='text-[#fff] bg-[#192654] rounded-full p-2 hover:bg-white hover:text-[#192654] hover:border-solid border-2 border-[#192654] transition-all'
                    onClick={handleMenuClick}
                >
                    <Menu size={26} />
                </div>
            </div>
        </div>
    )
}

export default HeadNav