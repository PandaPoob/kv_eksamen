import Step1Notice from "./Step1Notice";
import FremlysForm from "../../forms/FremlysForm";
import EfterlysForm from "../../forms/EfterlysForm";

function Step1({
  fremlysning,
  setStep1State,
  step1State,
  onAuthCallback,
  setCurrentStepIndex,
}) {
  const onCallback = (data) => {
    setStep1State(data);
    onAuthCallback();
  };

  return (
    <>
      <Step1Notice />
      {fremlysning ? (
        <FremlysForm
          step1State={step1State}
          onCallback={onCallback}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ) : (
        <EfterlysForm
          step1State={step1State}
          onCallback={onCallback}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      )}
    </>
  );
}

export default Step1;
