import React, { useEffect, useState } from "react";

const CheckBoxField = ({
  name,
  arrayList,
  label,
  description,
  required,
  handleField,
}) => {
  const [expertiseList, setExpertiseList] = useState([]);

  function handleChange(event, value) {
    const optionLabel = value;

    if (expertiseList.includes(optionLabel)) {
      // Uncheck the checkbox by removing it from the array
      setExpertiseList(expertiseList.filter((label) => label !== optionLabel));
    } else {
      // Check the checkbox by adding it to the array
      setExpertiseList([...expertiseList, optionLabel]);
    }
  }

  useEffect(() => {
    handleField({ [name]: expertiseList.join(",") });
  }, [expertiseList]);

  return (
    <div className="relative pl-10 flex flex-col gap-2 mt-5">
      <div className="relative flex items-center">
        <span className="w-3 h-3 rounded-full bg-green-500 absolute -left-5"></span>
        <label className="font-bold">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      </div>
      <p className="text-blue-950/70 font-medium">{description}</p>
      {arrayList.map((title, ind) => (
        <div className="flex gap-2 items-center " key={ind}>
          <input
            id={title}
            type="checkbox"
            required={!!required}
            className="cursor-pointer"
            value={"Check Here"}
            onChange={(e) => handleChange(e, title)}
            checked={expertiseList.includes(title)}
          />
          <label htmlFor={title} className="cursor-pointer">
            {title}
          </label>
        </div>
      ))}
    </div>
  );
};
export default CheckBoxField;
