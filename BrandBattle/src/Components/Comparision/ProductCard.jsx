import React, { useState } from "react";
import { ShoppingCart, Star, Tag } from "lucide-react";
import CircularProgress from "./CircularProgress"; // uncomment when reusing or export it

const ProductCard = ({ product }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [platformSearch, setPlatformSearch] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const platforms = Object.keys(product.moreDiscount || {});
    const filteredPlatforms = platforms.filter((p) =>
        p.toLowerCase().includes(platformSearch.toLowerCase())
    );

    return (
        <div className="flex flex-col justify-between bg-white p-10 pt-10  bottom-10 mt-20 mx-20 cursor-pointer rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300 relative overflow-hidden group ]">
            <div className="imagebar w-full">
                <div className="absolute -top-5 left-4 mt-20">
                    <CircularProgress percentage={Math.floor(Math.random() * 40) + 60} label="Value" />
                </div>
                <div className="image w-full h-64 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                    <img src={product.image} alt={product.name} className="object-contain h-full w-full" />
                </div>
            </div>
            <hr /><hr />

            <div className="infobar w-full h-full mt-5 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold text-[#192654] mb-2">{product.name}</h3>

                <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <Tag size={16} className="text-[#192654]" />
                    Category: {product.category}
                </p>

                <p className="text-lg font-bold text-green-600 flex items-center gap-2">
                    <ShoppingCart size={18} className="text-green-600" />
                    {product.price}
                </p>

                <ul className="text-sm text-gray-600 mt-4 space-y-1">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <Star size={14} className="text-yellow-500" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 text-sm text-gray-700 space-y-1">
                    <p><strong>Function:</strong> {product.function}</p>
                    <p><strong>Best For:</strong> {product.bestFor}</p>
                    <p><strong>Unique:</strong> {product.uniqueThings}</p>
                    <p><strong>Hot Deals:</strong> {product.hotDeals}</p>
                </div>

                <div className="mt-4 text-sm text-[#eef3df] font-extrabold leading-6 bg-[#192654] p-6 flex flex-col gap-4">
                    <div>
                        <p><strong>More Discounts:</strong></p>
                        <ul className="list-disc ml-5">
                            {Object.entries(product.moreDiscount).map(([site, amount], i) => (
                                <li key={i}>{site}: {amount}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="border-2 border-[#eaeef8] text-[#eaeef8] px-6 py-3 rounded-lg font-bold hover:bg-[#1b2a4e] hover:text-white transition-all"
                        >
                            {selectedPlatform ? `Buy from ${selectedPlatform}` : "Buy Now"}
                        </button>

                        {showDropdown && (
                            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20">
                                <input
                                    type="text"
                                    placeholder="Search platform..."
                                    value={platformSearch}
                                    onChange={(e) => setPlatformSearch(e.target.value)}
                                    className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none"
                                />
                                <ul className="max-h-48 overflow-auto">
                                    {filteredPlatforms.map((site, i) => (
                                        <li
                                            key={i}
                                            onClick={() => {
                                                setSelectedPlatform(site);
                                                setShowDropdown(false);
                                                setPlatformSearch("");
                                                window.open(product.links?.[site], "_blank");
                                            }}
                                            className="px-4 py-2 hover:bg-[#eef3df] cursor-pointer text-[#1b2a4e]"
                                        >
                                            {site}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
