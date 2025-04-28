import React from 'react';
import ProductCard from './ProductCard';

const productCategories = [
  {
    title: 'APPLIANCES',
    image: 'https://cdn.pixabay.com/photo/2022/03/31/00/54/interior-design-7102003_1280.jpg',
  },
  {
    title: 'BEAUTY',
    image: 'https://cdn.pixabay.com/photo/2020/10/10/18/02/makeup-5643868_1280.jpg',
  },
  {
    title: 'ELECTRONICS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'FASHION',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg',
  },
  {
    title: 'GENZ',
    image: 'https://cdn.pixabay.com/photo/2017/04/06/11/24/fashion-2208045_1280.jpg',
  },
  {
    title: 'SPORTS',
    image: 'https://cdn.pixabay.com/photo/2022/02/16/04/15/cricketer-7015983_1280.jpg',
  },
];

function ProductGallery() {
  return (
    <div className="flex flex-wrap justify-center ">
      {productCategories.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          onClick={() => console.log(`${product.title} clicked`)}
        />
      ))}
    </div>
  );
}

export default ProductGallery;
