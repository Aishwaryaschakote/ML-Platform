import { useState } from "react";
import { predictIrrigation } from "../services/api";

export default function InputForm({ onResult }: any) {
  const [form, setForm] = useState({
    Soil_Type: "Loamy",
    Soil_pH: 6.5,
    Soil_Moisture: 25,
    Organic_Carbon: 0.8,
    Electrical_Conductivity: 0.3,
    Temperature_C: 32,
    Humidity: 60,
    Rainfall_mm: 0,
    Sunlight_Hours: 8,
    Wind_Speed_kmh: 10,
    Crop_Type: "Wheat",
    Crop_Growth_Stage: "Vegetative",
    Season: "Kharif",
    Irrigation_Type: "Drip",
    Water_Source: "Groundwater",
    Field_Area_hectare: 2,
    Mulching_Used: "Yes",
    Previous_Irrigation_mm: 5,
    Region: "South"
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await predictIrrigation(form);
    onResult(result);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border">
      <h2 className="text-xl font-bold mb-4">🌾 Smart Irrigation Prediction</h2>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
        <b>Example:</b> Soil Moisture = 25, Temperature = 32°C, Humidity = 60%
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input className="input" name="Soil_Moisture" placeholder="Soil Moisture" onChange={handleChange} />
        <input className="input" name="Temperature_C" placeholder="Temperature (°C)" onChange={handleChange} />
        <input className="input" name="Humidity" placeholder="Humidity (%)" onChange={handleChange} />
        <input className="input" name="Rainfall_mm" placeholder="Rainfall (mm)" onChange={handleChange} />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
      >
        🚀 Predict
      </button>
    </div>
  );
}