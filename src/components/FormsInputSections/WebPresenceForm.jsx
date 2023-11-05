import FormWrapper from "@/components/FormWrapper";
import TextInputField from "@/components/Inputs/TextInputField";
import { webPresenceFormFields } from "@/data";
import React from "react";

const WebPresenceForm = ({ handleField, dataObj }) => {
  return (
    <FormWrapper
      title="Web Presence"
      description="If you would be so kind to share, we would like to learn more about you through your web presence."
    >
      {webPresenceFormFields.map((data, ind) => (
        <TextInputField
          {...data}
          data={dataObj}
          key={ind}
          handleField={handleField}
        />
      ))}
    </FormWrapper>
  );
};

export default WebPresenceForm;
