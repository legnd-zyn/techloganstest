import FormWrapper from "@/components/FormWrapper";
import TextInputField from "@/components/Inputs/TextInputField";
import { personalInfoFieldArray } from "@/data";
import React from "react";

const PersonalInformation = ({ handleField }) => {
  return (
    <FormWrapper
      title="Personal Information"
      description=" Help us get to know you by answering the following question."
    >
      {personalInfoFieldArray.map((data, ind) => (
        <TextInputField {...data} handleField={handleField} key={ind} />
      ))}
    </FormWrapper>
  );
};

export default PersonalInformation;
