import { Box } from "@chakra-ui/react";
import { useState } from "react";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import DonoBreadCrumb from "../../../components/donorflow/DonoBreadCrumb";
import Step1Fast from "../../../components/donorflow/Step1Fast";
import Step2Medlem from "../../../components/donorflow/Step2Medlem";
import Step3Medlem from "../../../components/donorflow/Step3Medlem";
import Step4Dono from "../../../components/donorflow/Step4Dono";
import Step5Dono from "../../../components/donorflow/Step5Dono";

function StotFast({ sideData, data }) {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1Belob, setStep1Belob] = useState("");
  const [step2Info, setStep2Info] = useState("");

  const onBelobCallback = (values) => {
    setStep1Belob(values);
    setCurrentStepIndex(+1);
    window.scrollTo(0, 0);
  };

  const onPostCallBack = () => {
    console.log("PostData:", step1Belob, step2Info);
    setCurrentStepIndex(3);
    window.scrollTo(0, 0);
  };

  const steps = [
    {
      component: (
        <Step1Fast
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
        <Step2Medlem
          step2Info={step2Info}
          setStep2Info={setStep2Info}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ),
    },
    {
      component: (
        <Step3Medlem
          onPostCallBack={onPostCallBack}
          step1Belob={step1Belob}
          step2Info={step2Info}
          type={"fast"}
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
export default StotFast;
