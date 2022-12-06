import { Box, Heading, Text, Link } from "@chakra-ui/react";
import KontaktInfoForm from "../../forms/KontaktInfoForm";
import Step2Notice from "./Step2Notice";

function Step2({
  setStep2State,
  step2State,
  onPostCallback,
  setCurrentStepIndex,
}) {
  return (
    <>
      <Step2Notice />
      <KontaktInfoForm
        step2State={step2State}
        setStep2State={setStep2State}
        onCallback={onPostCallback}
        setCurrentStepIndex={setCurrentStepIndex}
      />
    </>
  );
}
export default Step2;
