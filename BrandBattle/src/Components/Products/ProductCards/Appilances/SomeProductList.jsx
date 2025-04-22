import React from 'react';
import ProductCard from '../ProductCard'; // or adjust the path based on location

const products = [
  {
    image: 'https://linktoimage1.png',
    title: 'Air Conditioner',
    price: 31999,
  },
  {
    image: 'https://linktoimage2.png',
    title: 'Refrigerator',
    price: 25999,
  },
  {
    image: 'https://linktoimage3.png',
    title: 'Microwave Oven',
    price: 8999,
  },
  {
    image: 'https://linktoimage4.png',
    title: 'Washing Machine',
    price: 15999,
  },
];

function SomeProductList() {
  return (
    <div className="flex flex-wrap justify-center bg-[#000000] py-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>  
  );
}

export default SomeProductList;
