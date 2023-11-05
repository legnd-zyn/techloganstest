"use client";

import { useMultiStepForm } from "@/customHooks/useMultiStep";
import PersonalInformation from "@/components/FormsInputSections/PersonalInformationForm";
import React, { useEffect, useLayoutEffect, useState } from "react";
import WebPresenceForm from "@/components/FormsInputSections/WebPresenceForm";
import Experience from "@/components/FormsInputSections/Experience";
import { PagesMetaData } from "@/data";

export default function Home() {
  const [data, setData] = useState(INIT_DATA);

  const { currentForm, forward, backward, isLastStep, currentStep } =
    useMultiStepForm([
      <PersonalInformation dataObj={data} handleField={handleUpdateField} />,
      <WebPresenceForm dataObj={data} handleField={handleUpdateField} />,
      <Experience dataObj={data} handleField={handleUpdateField} />,
    ]);

  function handleUpdateField(dataObj) {
    setData((prev) => ({ ...prev, ...dataObj }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!isLastStep) {
      return forward();
    }
    return console.log(data);
  }

  return (
    <main className="relative w-full max-w-7xl min-h-screen grid grid-cols-1 md:grid-cols-9 justify-center py-10 mx-auto">
      <div className="order-2 md:order-1 col-span-7 w-full max-w-[90%] lg:max-w-[80%] mx-auto text-blue-950">
        <form onSubmit={(e) => submitHandler(e)}>
          {currentForm}

          <div className="flex justify-end mt-5 gap-2">
            <button
              onClick={backward}
              type="button"
              className="px-4 py-2 bg-green-500 font-bold text-white rounded-sm text-sm active:scale-95 transition-all"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-950 font-bold text-white rounded-sm text-sm active:scale-95 transition-all"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <aside className="order-1 md:order-2 col-span-1 md:col-span-2 md:pl-5 md:mt-28">
        <ul className=" flex md:flex-col justify-center gap-5 border-t md:border-t-0  md:border-l w-full border-black pt-5 md:pt-0 md:pl-5 pb-7">
          {PagesMetaData.map((title, ind) => (
            <li
              className="relative text-center flex flex-col md:text-left"
              key={ind}
            >
              <span
                className={`absolute flex items-center justify-center  p-1 w-5 h-5 text-xs ${
                  currentStep > ind
                    ? "bg-green-500 text-white"
                    : currentStep === ind
                    ? "bg-blue-950 text-white"
                    : " bg-white border border-blue-950 text-blue-950"
                } -top-[1.85rem] self-center md:top-0 md:-left-[1.90rem] rounded-full`}
              >
                {ind + 1}
              </span>{" "}
              <span className="text-xs">{title}</span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}

const INIT_DATA = {
  firstName: "",
  lastName: "",
  phone: "",
  country: "",
  city: "",
  nationality: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  github: "",
  website: "",
  references: "",
};
