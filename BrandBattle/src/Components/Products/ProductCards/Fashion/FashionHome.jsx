import React from 'react';
import HeadNav from '../../../Home/Navbar/HeadNav';
import Tagbar from '../../../TaggedCategory/Tagbar';
import FashionCards from './FashionCards';
import { motion } from 'framer-motion';
import LabelFashion from './LabelFashion';

function FashionHome() {
    return (
        <div className="bg-gradient-to-br from-[#eef3fd] to-[#d4deff] min-h-screen w-full">
            <Tagbar />
            <motion.h1
                className="font-extrabold text-[2.5rem] text-center text-[#192654] my-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                Choose Smarter. Compare Better. Stand Out Stronger.
            </motion.h1>

            <div className="flex flex-row gap-8 px-10 pb-10">

                {/* Left Side: Scrollable Cards */}
                <motion.div
                    className="w-[25%]  overflow-y-auto no-scrollbar flex flex-col gap-6 pr-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <FashionCards />
                </motion.div>

                {/* Right Side: Image + Text */}
                <motion.div
                    className="flex-1   items-center justify-start gap-6"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <LabelFashion />
                    <div className='flex mt-8'>
                        <motion.img
                            src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg"
                            alt="Fashion Showcase"
                            className="rounded-3xl shadow-2xl w-[80%] h-[60vh] object-cover"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 120 }}
                        />

                        <motion.div
                            className="text-center px-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <h2 className="text-[#192654] text-3xl font-bold mb-4">Elevate Every Step. Define Every Story.</h2>
                            <p className="text-[#192654] text-lg leading-relaxed">
                                Fashion isn't just about wearing clothes — it's about making statements.<br />
                                For Men, it's a way of life, owning every move with style.<br />
                                For Women, it's the power to unleash elegance that leaves an unforgettable mark.<br />
                                For Kids, it's where dreams spark, and tiny steps create big impressions.<br />
                                Choose smarter. Compare better. Stand out stronger — every moment, every generation.
                            </p>
                        </motion.div>
                    </div>
                    {/* <LabelFashion/> */}
                </motion.div>
            </div>
        </div>
    );
}

export default FashionHome;
