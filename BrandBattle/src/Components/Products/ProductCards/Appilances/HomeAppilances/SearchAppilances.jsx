import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import appliancesData from '../../../../Data/appliancesData.json'; // Your appliances JSON
import ApplianceCard from './AppilancesCard'; // ApplianceCard component

function SearchAppliances() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
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
        appliancesData.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setSuggestions([]);
      setSelectedAppliance(null);
    }
  }, [query]);

  const handleInput = (e) => {
    setQuery(e.target.value);
    setSelectedAppliance(null);
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
    const t = (term || query).toLowerCase();
    const found = appliancesData.find(a => a.name.toLowerCase() === t);
    setSelectedAppliance(found || null);
    setSuggestions([]);
  };

  const startVoice = () => {
    recognitionRef.current?.start();
  };

  return (
    <div className="bg-gradient-to-br from-[#d4deff] via-[#bfcfde] to-[#99a8e5] w-full flex flex-col items-center p-4 px-4">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          className="w-full px-5 py-3 rounded-full shadow-xl bg-white/30 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#192654] placeholder:text-[#192654] text-[#192654] font-semibold"
          placeholder="Search for an appliance..."
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            onClick={() => doSearch()}
            className="bg-[#192654] hover:bg-[#1f2e78] text-white p-2 rounded-full transition"
          >
            <Search size={20} />
          </button>
          <button
            onClick={startVoice}
            className="bg-[#192654] hover:bg-[#1f2e78] text-white p-2 rounded-full transition"
          >
            <Mic size={20} />
          </button>
        </div>

        {suggestions.length > 0 && (
          <motion.div
            className="absolute w-full bg-white rounded-xl mt-2 shadow-lg max-h-48 overflow-y-auto z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {suggestions.map(a => (
              <div
                key={a.id}
                onClick={() => handleSuggestionClick(a.name)}
                className="p-3 hover:bg-[#e9f1ff] cursor-pointer text-[#192654] font-medium"
              >
                {a.name}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {selectedAppliance && (
        <div className="mt-10">
          <ApplianceCard appliance={selectedAppliance} />
        </div>
      )}

      {!selectedAppliance && query && !suggestions.length && (
        <motion.p
          className="mt-10 text-[#192654] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No appliance found for “{query}”
        </motion.p>
      )}
    </div>
  );
}

export default SearchAppliances;
