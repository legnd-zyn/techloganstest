import React, { useEffect, useId, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const DropDownInput = ({ label, name, description, handleField, data }) => {
  return (
    <div className="relative pl-10 flex flex-col gap-5 mt-5">
      <div className="relative flex items-center">
        <span className="w-3 h-3 rounded-full bg-green-500 absolute -left-5"></span>
        <label className="font-bold">{label}</label>
      </div>
      {description && (
        <p className="text-blue-950/70 font-medium">{description}</p>
      )}
      <DropDown name={name} handleField={handleField} data={data} />
    </div>
  );
};

const DropDown = ({
  listArray = ["One to less", "One to three", "Three or more"],
  handleField,
  name,
  data,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(data[name] || "");

  function handleValueChange(value) {
    setIsVisible(false);
    setTitle(value);
  }

  useEffect(() => {
    handleField({ [name]: title });
  }, [title]);

  return (
    <div className="w-full relative cursor-pointer">
      <p
        className="px-4 py-2 rounded-md outline-none border border-blue-950/10 text-sm focus-within:border-blue-950/30 w-full text-left font-medium flex justify-between "
        onClick={() => setIsVisible(true)}
      >
        {" "}
        {title || "Select"} <FiChevronDown />{" "}
      </p>
      {isVisible && (
        <div className="absolute bg-white w-full h-max z-10 text-left border border-blue-950/20 border-t-transparent max-h-48 overflow-y-auto flex flex-col gap-1 rounded-sm p-1">
          {listArray.map((title, ind) => (
            <button
              type="button"
              key={ind}
              className="w-full text-sm bg-white/20 font-medium py-1 border border-blue-950/20 rounded-sm"
              onClick={() => {
                handleValueChange(title);
              }}
            >
              {title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownInput;
