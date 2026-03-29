import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay from "../components/ResultDisplay";

export default function ProjectPage() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <InputForm onResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
}