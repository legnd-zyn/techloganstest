import React from "react";

const FormWrapper = ({ title, description, children }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2">{description}</p>
      <div className="w-full mt-10 border-t-4 px-5 py-10 border-t-green-500 rounded-sm overflow-hidden bg-white">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
