import React from "react";

interface ComparisonTableProps {
  data: {
    model: string;
    prediction: number;
    accuracy?: string;
  }[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 font-semibold text-gray-600">Model Name</th>
            <th className="py-3 px-4 font-semibold text-gray-600">Prediction</th>
            <th className="py-3 px-4 font-semibold text-gray-600">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-800 font-medium">{item.model}</td>
              <td className="py-3 px-4 text-gray-600">{item.prediction}</td>
              <td className="py-3 px-4 text-green-600 font-semibold">
                {item.accuracy || "High"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
