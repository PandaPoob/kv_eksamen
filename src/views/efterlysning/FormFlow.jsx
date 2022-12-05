import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useState } from "react";
import Step1 from "../../components/efterlyst+fremlyst/formsteps/Step1";
import Step2 from "../../components/efterlyst+fremlyst/formsteps/Step2";
import Step3 from "../../components/efterlyst+fremlyst/formsteps/Step3";

function FormFlow() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1State, setStep1State] = useState("");
  const [step2State, setStep2State] = useState("");

  console.log(step1State);

  const onAuthCallback = () => {
    //get auth
    //if auth succesful:
    setCurrentStepIndex(+1);
  };

  const onPostCallback = () => {
    //get post data ready
    //if post data succesful:
    setCurrentStepIndex(+1);
  };

  const steps = [
    {
      component: (
        <Step1
          currenStepIndex={currenStepIndex}
          setStep1State={setStep1State}
          step1State={step1State}
          onAuthCallback={onAuthCallback}
        />
      ),
    },
    {
      component: (
        <Step2
          currenStepIndex={currenStepIndex}
          setStep2State={setStep2State}
          step2State={step2State}
          onPostCallback={onPostCallback}
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

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Button onClick={() => setCurrentStepIndex(0)}>Step 1</Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button onClick={() => setCurrentStepIndex(1)}>Step 2</Button>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Button onClick={() => setCurrentStepIndex(2)}>Step 3</Button>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>{steps[currenStepIndex].component}</Box>
    </>
  );
}

export default FormFlow;
