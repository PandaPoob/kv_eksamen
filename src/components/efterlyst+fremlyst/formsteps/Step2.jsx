import { Box, Heading, Text, Link } from "@chakra-ui/react";
import KontaktInfoForm from "../../forms/KontaktInfoForm";
import Step2Notice from "./Step2Notice";

function Step2({ setFlowState }) {
  const onCallback = (data) => {
    setFlowState(data);
    setCurrentStepIndex(+1);
  };
  return (
    <Box display="grid" gap={"2rem"}>
      <Step2Notice />
      <KontaktInfoForm onCallback={onCallback} />
    </Box>
  );
}
export default Step2;
