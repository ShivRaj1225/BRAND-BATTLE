import React, { useState, useEffect } from 'react';
import Tagbar from '../../../TaggedCategory/Tagbar';
import SportsCard from './SportsCategory/SportsCard';
import sportsEquipmentData from '../../../Data/sportsProducts.json';  // Add your sports equipment data here
import { motion } from 'framer-motion';
import SearchSportsEquipment from './SportsCategory/SearchSportsEquipment';
import TopTrendingSportsEquipment from './SportsCategory/TopTrendingSportsEquipment';
import LoadingSportsEquipment from './SportsCategory/LoadingSportsEquipment';
import SportsEquipmentCard from './SportsCategory/SportsEquipmentCard';


function Sports() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay like a real-world fetch
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="sports-home bg-gradient-to-br from-[#eef3fd] to-[#d4deff] min-h-screen w-full">
            <Tagbar />
            <SearchSportsEquipment />
            <SportsEquipmentCard/>
            
            {/* <TopTrendingSportsEquipment /> */}

            {isLoading ? (
                <div className="flex justify-center items-center mt-20">
                    <LoadingSportsEquipment />
                </div>
            ) : (
                <motion.div
                    className="sports-card-container flex flex-wrap justify-center items-center gap-8 p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {sportsEquipmentData.map((equipment) => (
                        <SportsCard key={equipment.id} equipment={equipment} />
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Sports;
