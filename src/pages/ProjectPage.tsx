import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay from "../components/ResultDisplay";

export default function ProjectPage() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-center">
          🚀 Smart Irrigation ML System
        </h1>

        <InputForm onResult={setResult} />
        <ResultDisplay result={result} />

      </div>
    </div>
  );
}