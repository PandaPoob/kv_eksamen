import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Step1Notice from "./Step1Notice";
import KatteInfoForm from "../../forms/KatteInfoForm";

function Step1({ setFlowState }) {
  const onCallback = (data) => {
    setFlowState(data);
    //change step setCurrentStepIndex(+1)
  };

  return (
    <Box display="grid" gap={"2rem"}>
      <Step1Notice />
      <KatteInfoForm onCallback={onCallback} />
    </Box>
  );
}

export default Step1;
