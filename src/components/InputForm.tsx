import React from "react";

interface InputField {
  name: string;
  label: string;
  type: string;
  default: any;
}

interface InputFormProps {
  fields: InputField[];
  onSubmit: (data: any) => void;
  loading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ fields, onSubmit, loading }) => {
  const [formData, setFormData] = React.useState<any>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.default }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
      >
        {loading ? "Processing..." : "Run Prediction"}
      </button>
    </form>
  );
};
