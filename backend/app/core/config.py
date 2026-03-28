import os
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings(BaseSettings):
    API_PREFIX: str = os.getenv("API_PREFIX", "/api")
    PROJECTS_DIR: str = os.getenv("PROJECTS_DIR", "app/projects")
    MODELS_DIR: str = os.getenv("MODELS_DIR", "app/models")

    class Config:
        env_file = ".env"

settings = Settings()
