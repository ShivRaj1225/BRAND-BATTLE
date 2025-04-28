import React, { useState } from "react";
import ProductData from "../Data/ProductData.json";
import ProductCard from "./ProductCard";
import HeadNav from "../Home/Navbar/HeadNav";
import Tagbar from "../TaggedCategory/Tagbar";

const Compare = () => {
    const [searchTerm1, setSearchTerm1] = useState("");
    const [searchTerm2, setSearchTerm2] = useState("");
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [suggestions1, setSuggestions1] = useState([]);

    const handleSearchChange1 = (e) => {
        const value = e.target.value;
        setSearchTerm1(value);
        if (value) {
            const filteredSuggestions = ProductData.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions1(filteredSuggestions);
        } else {
            setSuggestions1([]);
            setSelectedProduct1(null);
            setSelectedProduct2(null);
            setSearchTerm2("");
        }
    };

    const handleSuggestionClick1 = (product) => {
        setSelectedProduct1(product);
        setSearchTerm1(product.name);
        setSuggestions1([]);

        const category = product.category;
        const others = ProductData.filter(
            (p) => p.category === category && p.name !== product.name
        );
        const similar = others.length > 0 ? others[0] : null;

        setSelectedProduct2(similar);
        setSearchTerm2(similar ? similar.name : "");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eef3df] to-[#d0d8ff]">
            <HeadNav />
            <Tagbar />
            <h2 className="text-4xl font-bold mb-8 mt-6 text-center uppercase text-[#192654]">
                Product Comparison
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">

                <div className="relative w-80">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        value={searchTerm1}
                        onChange={handleSearchChange1}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#192654] text-[#192654] shadow-md"
                    />
                    {suggestions1.length > 0 && (
                        <div className="absolute z-10 bg-white w-full border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                            {suggestions1.map((product, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSuggestionClick1(product)}
                                    className="flex items-center px-4 py-2 hover:bg-[#eef3df] cursor-pointer text-[#192654]"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-8 h-[50%] object-cover rounded mr-2"
                                    />
                                    <span>{product.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    placeholder="Auto-selected similar product..."
                    value={searchTerm2}
                    readOnly
                    className="w-80 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md text-[#192654] cursor-not-allowed shadow-md"
                />

                <button className="border-2 border-[#1b2a4e] text-[#1b2a4e] px-6 py-4 rounded-lg font-bold hover:bg-[#1b2a4e] hover:text-white transition-all">
                    Talk to AI
                </button>
            </div>

            {selectedProduct1 && selectedProduct2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProductCard product={selectedProduct1} />
                    <ProductCard product={selectedProduct2} />
                </div>
            )}
        </div>
    );
};

export default Compare;
