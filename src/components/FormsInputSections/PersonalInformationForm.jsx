import FormWrapper from "@/components/FormWrapper";
import TextInputField from "@/components/Inputs/TextInputField";
import { personalInfoFieldArray } from "@/data";
import React from "react";

const PersonalInformation = ({ handleField, dataObj, currentStep }) => {
  return (
    <FormWrapper
      title="Personal Information"
      description=" Help us get to know you by answering the following question."
      currentStep={currentStep}
    >
      {personalInfoFieldArray.map((data, ind) => (
        <TextInputField
          {...data}
          data={dataObj}
          handleField={handleField}
          key={ind}
        />
      ))}
    </FormWrapper>
  );
};

export default PersonalInformation;
