import React from "react";
import FormControls from "./form-controls";
import { Button } from "../ui/button";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled 
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />

      <Button      
        disabled={isButtonDisabled}
        type="submit"
        className="mt-5 w-full font-black bg-black"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
