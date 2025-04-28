import { motion } from 'framer-motion'

const StorySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <img
          src="https://images.unsplash.com/photo-1606312614703-18fb983f51a7"
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-400 text-lg">
        Everyone’s been there — staring at dozens of products, unsure what's best. We created this platform to end the confusion.
        By analyzing price, features, functionality, and user needs, we make it easier than ever to choose what truly fits you.
        </p>
      </motion.div>
    </section>
  )
}

export default StorySection
