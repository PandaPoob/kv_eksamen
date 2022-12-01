import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import Step1 from "../../components/efterlyst+fremlyst/formsteps/Step1";
import Step2 from "../../components/efterlyst+fremlyst/formsteps/Step2";
import Step3 from "../../components/efterlyst+fremlyst/formsteps/Step3";

function FormFlow() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [flowState, setFlowState] = useState("");
  console.log(flowState);

  const steps = [
    {
      component: (
        <Step1
          currenStepIndex={currenStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
          setFlowState={setFlowState}
        />
      ),
    },
    {
      component: (
        <Step2
          currenStepIndex={currenStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ),
    },
    {
      component: (
        <Step3
          currenStepIndex={currenStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ),
    },
  ];

  return <Box>{steps[currenStepIndex].component}</Box>;
}

export default FormFlow;
