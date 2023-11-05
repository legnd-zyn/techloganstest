import { useState } from "react";

export function useMultiStepForm(components) {
  const [componentsStep, setComponentsStep] = useState(2);

  function forward() {
    setComponentsStep((prev) => {
      if (prev >= components.length - 1) return prev;
      return prev + 1;
    });
  }
  function backward() {
    setComponentsStep((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  return {
    currentForm: components[componentsStep],
    forward,
    backward,
    isFirstStep: components.lenght - 1 === 0,
    isLastStep: componentsStep === components.length - 1,
    steps: components,
  };
}
