import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="h-[55vh] flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold"
      >
       "No Hype. Just Honest Comparisons."


      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-400 mt-4"
      >
       Struggling to pick the right product or brand? We simplify your decision with real data, smart comparisons, and honest insights.

      </motion.p>
    </section>
  )
}

export default HeroSection
