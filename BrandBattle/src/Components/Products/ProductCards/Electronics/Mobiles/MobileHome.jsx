import React, { useState, useEffect } from 'react';
import Tagbar from '../../../../TaggedCategory/Tagbar';
import MobileCard from './MobileCard';
import mobileData from '../../../../Data/mobileData.json';
import { motion } from 'framer-motion';
import SearchMobile from './SearchMobile';
import TopTrendingMobiles from './TopTrendingMobiles';
import LoadingPhone from './LoadingPhone'; // ← new

function MobileHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate fetch
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mobile-home bg-gradient-to-br from-[#d4deff] via-[#bfcfde] to-[#99a8e5] min-h-screen w-full">
      <Tagbar />
      <TopTrendingMobiles />
      <SearchMobile />

      {isLoading ? (
        <div className="flex justify-center items-center mt-20">
          <LoadingPhone />
        </div>
      ) : (
        <motion.div
          className="mobile-card-container flex flex-wrap justify-center items-center gap-8 p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {mobileData.map(mobile => (
            <MobileCard key={mobile.id} mobile={mobile} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default MobileHome;
