import { Box } from "@chakra-ui/react";
import { useState } from "react";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import Step1Dono from "../../../components/donorflow/Step1Dono";
import Step2Dono from "../../../components/donorflow/Step2Dono";
import Step3Dono from "../../../components/donorflow/Step3Dono";
import Step4Dono from "../../../components/donorflow/Step4Dono";
import Step5Dono from "../../../components/donorflow/Step5Dono";
import DonoBreadCrumb from "../../../components/donorflow/DonoBreadCrumb";

function Doner({ data, sideData }) {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1Belob, setStep1Belob] = useState("");
  const [step2Info, setStep2Info] = useState("");

  const onBelobCallback = (values) => {
    setStep1Belob(values);
    setCurrentStepIndex(+1);
  };

  const onPostCallBack = () => {
    console.log("PostData:", step1Belob, step2Info);
    setCurrentStepIndex(3);
  };
  console.log(currenStepIndex);
  const steps = [
    {
      component: (
        <Step1Dono
          data={data}
          sideData={sideData}
          step1Belob={step1Belob}
          setStep1Belob={setStep1Belob}
          onBelobCallback={onBelobCallback}
        />
      ),
    },
    {
      component: (
        <Step2Dono
          step2Info={step2Info}
          setStep2Info={setStep2Info}
          currenStepIndex={currenStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ),
    },
    {
      component: (
        <Step3Dono
          onPostCallBack={onPostCallBack}
          step1Belob={step1Belob}
          step2Info={step2Info}
        />
      ),
    },
    {
      component: <Step4Dono setCurrentStepIndex={setCurrentStepIndex} />,
    },
    {
      component: <Step5Dono setCurrentStepIndex={setCurrentStepIndex} />,
    },
  ];

  return (
    <PageLayout>
      <PageHead {...sideData} />

      <Box
        minH="100vh"
        bg={currenStepIndex === 0 ? "transparent" : "brand.lightGrey"}
      >
        {" "}
        <Box display="grid">
          {currenStepIndex !== 0 && (
            <DonoBreadCrumb
              setCurrentStepIndex={setCurrentStepIndex}
              currenStepIndex={currenStepIndex}
              step2Info={step2Info}
            />
          )}
          {steps[currenStepIndex].component}
        </Box>
      </Box>
    </PageLayout>
  );
}
export default Doner;
