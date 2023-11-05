import React from "react";
import DropDownInput from "../Inputs/DropDownList";
import FormWrapper from "../FormWrapper";
import CheckBoxField from "../Inputs/CheckBoxes";
import InputField from "../Inputs/TextInputField";

const Experience = ({ handleField, dataObj }) => {
  return (
    <FormWrapper
      title="Personal Information"
      description=" Help us get to know you by answering the following question."
    >
      <DropDownInput
        label="How many years of relevant experience?"
        name="experience"
        handleField={handleField}
        data={dataObj}
      />
      <CheckBoxField
        arrayList={[
          "Front End",
          "Back End",
          "Databases",
          "Algorithms",
          "Architectures",
        ]}
        label={"What domain is your expertise in?"}
        name={"expertise"}
        handleField={handleField}
        data={dataObj}
      />
      <InputField
        label="Other expert skills?"
        name="other"
        handleField={handleField}
        data={dataObj}
      />
    </FormWrapper>
  );
};

export default Experience;
