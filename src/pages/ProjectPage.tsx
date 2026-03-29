import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay from "../components/ResultDisplay";

export default function ProjectPage() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        <h1 className="text-2xl font-bold mb-4">
          🌾 Smart Irrigation System
        </h1>

        <InputForm onResult={setResult} />

        <ResultDisplay result={result} />
      </div>
    </div>
  );
}