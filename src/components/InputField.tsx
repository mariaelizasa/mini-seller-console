type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  type?: string;
};

const InputField = ({
  id,
  label,
  value,
  readOnly = false,
  onChange,
  type = "text",
}: InputFieldProps) => (
  <div className="flex flex-col text-left">
    <label htmlFor={id} className="mb-1 text-gray-700 font-medium">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800"
    />
  </div>
);

export default InputField;
