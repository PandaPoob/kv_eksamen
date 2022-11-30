import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Step1Notice from "./Step1Notice";
import EfterlysForm from "../../forms/EfterlysForm";

function Step1() {
  return (
    <Box display="grid" gap={"2rem"}>
      <Step1Notice />
      <EfterlysForm />
    </Box>
  );
}

export default Step1;
