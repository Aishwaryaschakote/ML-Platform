import os
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import irrigation
from app.core.config import settings

app = FastAPI(
    title="ML Platform API",
    description="Scalable multi-project machine learning platform",
    version="2.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routes
app.include_router(irrigation.router, prefix="/api", tags=["prediction"])

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "version": "2.0.0"}
