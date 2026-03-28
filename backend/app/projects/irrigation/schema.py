from pydantic import BaseModel

class IrrigationInput(BaseModel):
    temperature: float
    humidity: float
    soil_moisture: float
    rainfall: float
    wind_speed: float
