from fastapi import APIRouter
from app.projects.irrigation.predict import predict
from app.projects.irrigation.schema import IrrigationInput

router = APIRouter()

@router.post("/irrigation")
def irrigation_predict(data: IrrigationInput):
    return predict(data.dict())