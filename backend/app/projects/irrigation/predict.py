import pickle
import numpy as np
import json
import os
import pandas as pd   # ✅ FIXED

# ✅ Robust path (important)
BASE = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
BASE = os.path.join(BASE, "models", "irrigation")

# ✅ Load models once
models = {
    "linear": pickle.load(open(os.path.join(BASE, "linear_regression.pkl"), "rb")),
    "rf": pickle.load(open(os.path.join(BASE, "random_forest.pkl"), "rb")),
    "xgb": pickle.load(open(os.path.join(BASE, "xgboost.pkl"), "rb"))
}

# ✅ Load metadata
metadata = json.load(open(os.path.join(BASE, "metadata.json")))

def predict(data: dict):
    input_df = pd.DataFrame([data])

    # Predictions
    pred_lr = models["linear"].predict(input_df)[0]
    pred_rf = models["rf"].predict(input_df)[0]
    pred_xgb = models["xgb"].predict(input_df)[0]

    # Ensemble
    final_pred = 0.2 * pred_lr + 0.4 * pred_rf + 0.4 * pred_xgb

    # Agreement
    preds = [pred_lr, pred_rf, pred_xgb]
    std = np.std(preds)

    agreement = "HIGH" if std < 0.5 else "LOW"
    confidence = round(1 / (1 + std), 2)

    # Decision
    threshold = metadata["target_mean"]
    motor = "ON" if final_pred > threshold else "OFF"

    return {
        "models": {
            "linear": float(pred_lr),
            "rf": float(pred_rf),
            "xgb": float(pred_xgb)
        },
        "final_prediction": float(final_pred),
        "agreement": agreement,
        "confidence": confidence,
        "motor": motor
    }