import React from 'react';
import { Mail, Facebook, Twitter, Youtube, Instagram, Send, Rss, Play } from 'lucide-react';

const icons = [
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
 
];

function FooterSocials() {
  return (
    <div className="flex gap-4 flex-wrap">
      {icons.map((Icon, index) => (
        <div key={index} className="p-2 rounded-full bg-[#eef3fd] text-[#194654] hover:bg-cyan-400 transition">
          <Icon size={20} />
        </div>
      ))}
    </div>
  );
}

export default FooterSocials;
