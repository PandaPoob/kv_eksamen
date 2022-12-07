import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Step1Notice from "./Step1Notice";
import EfterlysForm from "../../forms/EfterlysForm";

function Step1({
  setStep1State,
  step1State,
  onAuthCallback,
  setCurrentStepIndex,
}) {
  const onCallback = (data) => {
    setStep1State(data);
    onAuthCallback();
  };

  return (
    <>
      <Step1Notice />
      <EfterlysForm
        step1State={step1State}
        onCallback={onCallback}
        setCurrentStepIndex={setCurrentStepIndex}
      />
    </>
  );
}

export default Step1;
