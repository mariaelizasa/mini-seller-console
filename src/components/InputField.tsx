type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  readOnly?: boolean;
  onChange: (val: string, valid?: boolean) => void;
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
      required={type === "email"}
      onChange={(e) => onChange(e.target.value, e.target.checkValidity())}
      className="border p-2 rounded invalid:border-red-500 valid:border-green-500"
    />
  </div>
);

export default InputField;
