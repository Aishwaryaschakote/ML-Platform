import React from "react";

interface PredictionCardProps {
  title: string;
  value: number | string;
  unit?: string;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ title, value, unit }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {title}
      </h4>
      <div className="text-2xl font-bold text-gray-800">
        {value} {unit}
      </div>
    </div>
  );
};
