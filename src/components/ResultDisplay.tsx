import React from "react";

interface ResultDisplayProps {
  finalValue: number | string;
  status: string;
  label: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ finalValue, status, label }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-center">
      <h3 className="text-lg font-bold text-blue-800 mb-2">{label}</h3>
      <div className="text-5xl font-black text-blue-600 mb-4">{finalValue}</div>
      <div className={`inline-block px-6 py-2 rounded-full font-bold text-white ${
        status === "ON" ? "bg-green-500" : "bg-red-500"
      }`}>
        Status: {status}
      </div>
    </div>
  );
};
