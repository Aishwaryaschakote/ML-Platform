export default function ResultDisplay({ result }: any) {
  if (!result) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📊 Prediction Results</h3>

      <p><b>Final Prediction:</b> {result.final_prediction}</p>
      <p><b>Motor:</b> {result.motor}</p>
      <p><b>Confidence:</b> {result.confidence}</p>
      <p><b>Agreement:</b> {result.agreement}</p>

      <h4>🤖 Model Outputs</h4>
      <p>Linear: {result.models.linear}</p>
      <p>Random Forest: {result.models.rf}</p>
      <p>XGBoost: {result.models.xgb}</p>
    </div>
  );
}