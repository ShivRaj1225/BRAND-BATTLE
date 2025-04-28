import React, { useState, useEffect } from 'react';
import Tagbar from '../../../../TaggedCategory/Tagbar';
import TabletCard from './TabletCard';
import tabletData from '../../../../Data/TabletData.json';
import { motion } from 'framer-motion';
import SearchTablet from './SearchTablet';
import TopTrendingTablet from './TopTrendingTablet';
import LoadingTablet from './LoadingTablet';

function TabletHome() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay like a real-world fetch
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="tablet-home bg-gradient-to-br from-[#d4deff] via-[#bfcfde] to-[#99a8e5] min-h-screen w-full">
            <Tagbar />
            <TopTrendingTablet />
            <SearchTablet />

            {isLoading ? (
                <div className="flex justify-center items-center mt-20">
                    <LoadingTablet />
                </div>
            ) : (
                <motion.div
                    className="tablet-card-container flex flex-wrap justify-center items-center gap-8 p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {tabletData.map((tablet) => (
                        <TabletCard key={tablet.id} tablet={tablet} />
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default TabletHome;
