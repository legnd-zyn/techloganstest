"use client";

import { useMultiStepForm } from "@/customHooks/useMultiStep";
import PersonalInformation from "@/components/FormsInputSections/PersonalInformationForm";
import { useState } from "react";
import WebPresenceForm from "@/components/FormsInputSections/WebPresenceForm";
import Experience from "@/components/FormsInputSections/Experience";

export default function Home() {
  const [data, setData] = useState({});
  const { currentForm, forward, backward, isLastStep } = useMultiStepForm([
    <PersonalInformation handleField={handleUpdateField} />,
    <WebPresenceForm handleField={handleUpdateField} />,
    <Experience handleField={handleUpdateField} />,
  ]);

  function handleUpdateField(dataObj) {
    setData((prev) => ({ ...prev, ...dataObj }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!isLastStep) return forward();
    console.log(data);
  }

  return (
    <main className="relative w-full min-h-screen grid grid-cols-1 justify-center py-10">
      <div className="col-span-1 w-full max-w-[80%] mx-auto text-blue-950">
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
    </main>
  );
}
