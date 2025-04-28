import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';

const cards = [
  { 
    title: 'Men', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB6cPeVNJeAegj3vSpdTQNOvxgyedyfgVuA&s', 
    link: '/fashion/men',
    phrase: 'Not just fashion, a way of life, Own every moment, define every move.'



  },
  { 
    title: 'Women', 
    image: 'https://cdn.pixabay.com/photo/2014/10/13/18/10/woman-487067_1280.jpg', 
    link: '/fashion/women',
    phrase: 'More than beauty, it is a power Unleash elegance that leaves a mark.'
  },
  { 
    title: 'Kids', 
    image: 'https://cdn.pixabay.com/photo/2021/05/14/01/56/child-6252212_1280.jpg', 
    link: '/fashion/kids',
    phrase: 'Where dreams begin and styles are born Tiny steps, big impressions.'
  },
];

function FashionCards() {
  const navigate = useNavigate();

  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="w-[250px] h-[350px] bg-[#eef3fd] mt-3 rounded-2xl shadow-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Card Image */}
          <div
            className="h-[65%] w-full bg-cover bg-center p-3"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {/* Hover Phrase */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[70%] flex items-center justify-center backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-white font-semibold text-lg text-center px-2">{card.phrase}</h3>
            </motion.div>
          </div>

          {/* Card Title with Arrow */}
          <motion.div
            className="h-[25%] m-5  flex items-center justify-center rounded-2xl gap-2 bg-[#192654] hover:bg-[#141b41] transition-all cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(card.link)}
          >
            <h2 className="text-white font-bold text-2xl">{card.title}</h2>
            <ArrowRightCircle className="text-[#fff] ml-10 w-7 h-7" />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

export default FashionCards;
