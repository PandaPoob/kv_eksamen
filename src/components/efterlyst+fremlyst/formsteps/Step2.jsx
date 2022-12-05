import { Box, Heading, Text, Link } from "@chakra-ui/react";
import KontaktInfoForm from "../../forms/KontaktInfoForm";
import Step2Notice from "./Step2Notice";

function Step2({ setStep2State, step2State, onPostCallback }) {
  const onCallback = (data) => {
    setStep2State(data);
    onPostCallback();
  };
  return (
    <Box display="grid" gap={"2rem"}>
      <Step2Notice />
      <KontaktInfoForm step2State={step2State} onCallback={onCallback} />
    </Box>
  );
}
export default Step2;
