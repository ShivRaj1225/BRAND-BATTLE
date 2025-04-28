import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import sportsData from '../../../../Data/sportsProducts.json'; // updated path for sports equipment
import SportsEquipmentCard from './SportsEquipmentCard'; // import the correct Card

function SearchSportsEquipment() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SR();
      recog.lang = 'en-US';
      recog.interimResults = false;
      recog.maxAlternatives = 1;
      recog.onresult = (e) => {
        const t = e.results[0][0].transcript;
        setQuery(t);
        doSearch(t);
      };
      recognitionRef.current = recog;
    }
  }, []);

  useEffect(() => {
    if (query.trim()) {
      setSuggestions(
        sportsData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setSuggestions([]);
      setSelectedEquipment(null);
    }
  }, [query]);

  const handleInput = (e) => {
    setQuery(e.target.value);
    setSelectedEquipment(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && suggestions.length) {
      e.preventDefault();
      setQuery(suggestions[0].name);
      setSuggestions([]);
    }
    if (e.key === 'Enter') {
      doSearch();
    }
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setSuggestions([]);
    doSearch(name);
  };

  const doSearch = (term) => {
    const searchTerm = (term || query).toLowerCase();
    const found = sportsData.find(item => item.name.toLowerCase() === searchTerm);
    setSelectedEquipment(found || null);
    setSuggestions([]);
  };

  const startVoice = () => {
    recognitionRef.current?.start();
  };

  return (
    <div className="bg-gradient-to-br from-[#fff3d4] via-[#ffe0b2] to-[#ffc107] w-full flex flex-col items-center p-4 px-4">
      {/* Search bar */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          className="w-full px-5 py-3 rounded-full shadow-xl bg-white/30 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8f00] placeholder:text-[#ff8f00] text-[#ff8f00] font-semibold"
          placeholder="Search for sports equipment..."
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            onClick={() => doSearch()}
            className="bg-[#ff8f00] hover:bg-[#ff6f00] text-white p-2 rounded-full transition"
          >
            <Search size={20} />
          </button>
          <button
            onClick={startVoice}
            className="bg-[#ff8f00] hover:bg-[#ff6f00] text-white p-2 rounded-full transition"
          >
            <Mic size={20} />
          </button>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <motion.div
            className="absolute w-full bg-white rounded-xl mt-2 shadow-lg max-h-48 overflow-y-auto z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {suggestions.map(item => (
              <div
                key={item.id}
                onClick={() => handleSuggestionClick(item.name)}
                className="p-3 hover:bg-[#fff8e1] cursor-pointer text-[#ff8f00] font-medium"
              >
                {item.name}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Render SportsEquipmentCard for selected result */}
      {selectedEquipment && (
        <div className="mt-10">
          <SportsEquipmentCard equipment={selectedEquipment} />
        </div>
      )}

      {/* No match message */}
      {!selectedEquipment && query && !suggestions.length && (
        <motion.p
          className="mt-10 text-[#ff8f00] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No equipment found for “{query}”
        </motion.p>
      )}
    </div>
  );
}

export default SearchSportsEquipment;
