import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MegaDropdown({ category, onClose }) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Simulate fetching API
    async function fetchData() {
      // Future: Replace with real API call
      const response = await fetch('/mock-dropdown-data.json'); // or your API endpoint
      const json = await response.json();
      setData(json[category] || {});
    }
    fetchData();
  }, [category]);

  if (!Object.keys(data).length) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="w-[800px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-8 text-gray-800 animate-fadeIn transition-all duration-500 border border-cyan-400"
      style={{ boxShadow: '0 8px 20px rgba(0, 255, 255, 0.4)' }}
    >
      {Object.keys(data).map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold text-[#192654] mb-4">{section}</h3>
          <div className="flex flex-col gap-4">
            {data[section].map((item, idx) => (
              <Link to={item.path} key={idx} className="flex items-center gap-3 hover:text-cyan-600 transition">
                <img src={item.img} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MegaDropdown;
