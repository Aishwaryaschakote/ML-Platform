export const projects = [
  {
    id: "irrigation",
    name: "Smart Irrigation",
    icon: "🌾",
    description: "Predict water requirements and control irrigation systems based on environmental factors.",
    route: "/project/irrigation",
    apiEndpoint: "/api/predict/irrigation",
    inputFields: [
      { name: "temperature", label: "Temperature (°C)", type: "number", default: 25 },
      { name: "humidity", label: "Humidity (%)", type: "number", default: 60 },
      { name: "soil_moisture", label: "Soil Moisture (%)", type: "number", default: 30 },
      { name: "rainfall", label: "Rainfall (mm)", type: "number", default: 0 },
      { name: "wind_speed", label: "Wind Speed (km/h)", type: "number", default: 10 },
    ],
  },
  {
    id: "air-quality",
    name: "Air Quality",
    icon: "🌫️",
    description: "Monitor and predict air quality index (AQI) using sensor data.",
    route: "/project/air-quality",
    apiEndpoint: "/api/predict/air-quality",
    inputFields: [
      { name: "pm25", label: "PM2.5", type: "number", default: 15 },
      { name: "pm10", label: "PM10", type: "number", default: 25 },
      { name: "no2", label: "NO2", type: "number", default: 10 },
    ],
  },
  {
    id: "humor-detection",
    name: "Humor Detection",
    icon: "😂",
    description: "Analyze text to detect humor and sentiment using NLP models.",
    route: "/project/humor-detection",
    apiEndpoint: "/api/predict/humor",
    inputFields: [
      { name: "text", label: "Input Text", type: "text", default: "Why did the chicken cross the road?" },
    ],
  },
  {
    id: "sensor-prediction",
    name: "Sensor Prediction",
    icon: "⚙️",
    description: "Predict sensor failures and maintenance needs in industrial equipment.",
    route: "/project/sensor-prediction",
    apiEndpoint: "/api/predict/sensor",
    inputFields: [
      { name: "vibration", label: "Vibration", type: "number", default: 0.5 },
      { name: "pressure", label: "Pressure", type: "number", default: 100 },
    ],
  },
];
