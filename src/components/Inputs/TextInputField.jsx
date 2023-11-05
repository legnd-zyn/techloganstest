const { useId } = require("react");

const InputField = ({
  name,
  label,
  description,
  required,
  handleField,
  data,
}) => {
  const ID = useId();
  return (
    <div className="relative pl-10 flex flex-col gap-5 mt-5">
      <div className="relative flex items-center">
        <span className="w-3 h-3 rounded-full bg-green-500 absolute -left-5"></span>
        <label htmlFor={ID} className="font-bold">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      </div>
      {description && (
        <p className="text-blue-950/70 font-medium">{description}</p>
      )}
      <input
        id={ID}
        type="text"
        required={!!required}
        className="px-4 py-2 rounded-md outline-none border border-blue-950/10 text-sm focus-within:border-blue-950/30"
        placeholder="type here..."
        value={data[name] || ""}
        onChange={(e) => handleField({ [name]: e.target?.value })}
        name={name}
      />
    </div>
  );
};
export default InputField;
