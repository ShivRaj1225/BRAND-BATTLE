import React from 'react';
import FooterColumn from './FooterColumn';

const linkData = [
  {
    title: 'Categories',
    links: [
      'Mobile Phones', 'Tablets',  'Earphones', 'Smartwatches',
      'Laptops', 'TVs', 'ACs', 'Fridge', 'Washing Machines', 'Trimmers', 
    ],
  },
  {
    title: 'Mobile Brands',
    links: [
      'Samsung Mobiles', 'Redmi / Mi Mobiles', 'Realme Mobiles', 'Vivo Mobiles',
      'Motorola Mobiles', 'OnePlus Mobiles', 'Oppo Mobiles', 'Apple iPhones',
      'Infinix Mobiles', 'Poco Mobiles', 'Tecno Mobiles', 'Nokia Mobiles'
    ],
  },
  {
    title: 'Mobile Lists',
    links: [
      'Smartphones', '5G Mobiles', '4G Mobiles', 'New Mobiles', 'Upcoming Mobiles',
      '8GB RAM Mobiles', '12GB RAM Mobiles', 'Android Mobiles', 'Fingerprint Phones',
      'Waterproof Mobiles', '5000 mAh Mobiles', 'Keypad Mobiles'
    ],
  },
  {
    title: 'About',
    links: [
      'About Smartprix', 'Team',  'Contact Us', 'Help', 'Tools',
      'Find A Mobile', 'Compare Mobiles', 'Latest News'
    ],
  },
];

function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-6">
      {linkData.map((col, index) => (
        <FooterColumn key={index} title={col.title} links={col.links} />
      ))}
    </div>
  );
}

export default FooterLinks;
