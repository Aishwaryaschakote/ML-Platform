import { ComparisonTable } from "./ComparisonTable";
import { PredictionCard } from "./PredictionCard";

export default function ResultDisplay({ result }: any) {
  if (!result) return null;

  const data = [
    { model: "Linear Regression", prediction: result.models.linear },
    { model: "Random Forest", prediction: result.models.rf },
    { model: "XGBoost", prediction: result.models.xgb }
  ];

  return (
    <div className="mt-6 space-y-6">

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PredictionCard title="Final Prediction" value={result.final_prediction.toFixed(2)} />
        
        <PredictionCard 
          title="Motor Status" 
          value={result.motor === "ON" ? "🟢 ON" : "🔴 OFF"} 
        />

        <PredictionCard title="Confidence" value={result.confidence} />

        <PredictionCard 
          title="Agreement" 
          value={result.agreement === "HIGH" ? "✅ HIGH" : "⚠️ LOW"} 
        />
      </div>

      {/* Warning */}
      {result.agreement === "LOW" && (
        <div className="p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-sm">
          ⚠️ Models are disagreeing. Prediction may be less reliable.
        </div>
      )}

      {/* Table */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold mb-3">🤖 Model Comparison</h3>
        <ComparisonTable data={data} />
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold mb-3">📊 Model Predictions</h3>

        <div className="space-y-2">
          {data.map((d, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm">
                <span>{d.model}</span>
                <span>{d.prediction.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${Math.min(d.prediction * 50, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}