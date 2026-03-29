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
    <div>
      <h2>🌾 Irrigation Prediction</h2>

      {/* Example format */}
      <div style={{ marginBottom: "10px", color: "gray" }}>
        <b>Example:</b> Soil_Type = Loamy, Soil_Moisture = 25, Temperature = 32
      </div>

      {/* Few important inputs */}
      <input name="Soil_Moisture" placeholder="Soil Moisture" onChange={handleChange} />
      <input name="Temperature_C" placeholder="Temperature" onChange={handleChange} />
      <input name="Humidity" placeholder="Humidity" onChange={handleChange} />
      <input name="Rainfall_mm" placeholder="Rainfall" onChange={handleChange} />

      <button onClick={handleSubmit}>Predict</button>
    </div>
  );
}