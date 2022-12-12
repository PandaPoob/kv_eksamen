import KontaktInfoForm from "../../forms/KontaktInfoForm";
import Step2Notice from "./Step2Notice";

function Step2({
  setStep2State,
  step2State,
  onPostCallback,
  setCurrentStepIndex,
  setPostLoading,
  postLoading,
}) {
  return (
    <>
      <Step2Notice />
      <KontaktInfoForm
        step2State={step2State}
        setStep2State={setStep2State}
        onCallback={onPostCallback}
        setCurrentStepIndex={setCurrentStepIndex}
        setPostLoading={setPostLoading}
        postLoading={postLoading}
      />
    </>
  );
}
export default Step2;
