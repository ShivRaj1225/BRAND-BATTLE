// 🔵 CircularProgress Component
import React from "react";

const CircularProgress = ({ percentage, label }) => {
    const radius = 30;
    const stroke = 6;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-20 h-20">
            <svg height="100%" width="100%">
                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="40"
                    cy="40"
                />
                <circle
                    stroke="#00b894"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s ease" }}
                    r={normalizedRadius}
                    cx="40"
                    cy="40"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-md font-bold text-[#192654]">{percentage}%</span>
                <span className="text-xs text-gray-500">{label}</span>
            </div>
        </div>
    );
};

export default CircularProgress;
