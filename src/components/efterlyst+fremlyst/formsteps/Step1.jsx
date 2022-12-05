import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Step1Notice from "./Step1Notice";
import EfterlysForm from "../../forms/EfterlysForm";

function Step1({ setStep1State, step1State, onAuthCallback }) {
  const onCallback = (data) => {
    setStep1State(data);
    onAuthCallback();
  };

  return (
    <Box
      display="grid"
      gap={{ base: "2rem", xl: "6rem" }}
      gridTemplateColumns={{ lg: "1fr 1fr" }}
      justifySelf="center"
    >
      <Step1Notice />
      <EfterlysForm step1State={step1State} onCallback={onCallback} />
    </Box>
  );
}

export default Step1;
