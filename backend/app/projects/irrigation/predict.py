import os
import random
from app.projects.irrigation.model_loader import irrigation_model_loader
from app.projects.irrigation.schema import IrrigationInput

async def predict(data: IrrigationInput):
    """
    Project specific prediction logic for Smart Irrigation.
    Returns structured output with multiple model results.
    """
    # 1. Load models
    models = await irrigation_model_loader.get_models()
    
    # 2. Run predictions
    model_outputs = {}
    for name, model in models.items():
        model_outputs[name] = model.predict(data.model_dump())
        
    # 3. Decision Logic
    final_prediction = round(sum(model_outputs.values()) / len(model_outputs), 2)
    motor = "ON" if final_prediction > 5 else "OFF"
    
    return {
        "models": model_outputs,
        "final_prediction": final_prediction,
        "motor": motor,
        "confidence": 0.96
    }
