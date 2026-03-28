from fastapi import APIRouter, HTTPException
from app.projects.irrigation.predict import predict
from app.projects.irrigation.schema import IrrigationInput

router = APIRouter()

@router.post("/irrigation")
async def predict_endpoint(input_data: IrrigationInput):
    """
    Irrigation Prediction Endpoint.
    Directly calls the project-specific prediction logic.
    """
    try:
        result = await predict(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
