import { Box, Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
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
    const postData = {
      navn: step1State.catname,
      kon: step1State.kon,
      beskrivelse: step1State.descrip,
      dato: "2022/10/",
      postnummer: "4700",
      landsdel: "Sjælland og øerne",
      oremaerket: "Ja",
      oremaerkenr: "",
      chippet: "Ja",
      chipnr: "208274000118155",
      billede:
        "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/11/efterlyste_zarkarias.webp",
      kontaktnavn: "Emmelie Hummelgaard",
      by: "Næstved",
    };
    //get post data ready
    //if post data succesful:
    setCurrentStepIndex(+1);
  };

  const steps = [
    {
      component: (
        <Step1
          setCurrentStepIndex={setCurrentStepIndex}
          setStep1State={setStep1State}
          step1State={step1State}
          onAuthCallback={onAuthCallback}
        />
      ),
    },
    {
      component: (
        <Step2
          setCurrentStepIndex={setCurrentStepIndex}
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
    <Box
      display={"grid"}
      maxWidth={"container.xxl"}
      gap={{ base: "2rem", xl: "6rem" }}
      gridTemplateColumns={{ lg: "1.2fr 1fr" }}
      mx={{ md: "6rem", lg: "auto" }}
      px={{ lg: "1rem" }}
    >
      {steps[currenStepIndex].component}
    </Box>
  );
}

export default FormFlow;
