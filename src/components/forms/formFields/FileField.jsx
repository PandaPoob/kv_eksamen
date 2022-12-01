import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const FileFieldInitialValue = (formState) => {
  console.log("here:", formState.billede);
  return {
    billede: formState?.billede || "",
  };
};

const FileFieldValidation = () => {
  return {
    billede: Yup.mixed().nullable().required("Billede påkrævet"),
  };
};

function FileField() {
  return (
    <InputControl
      name="billede"
      label="Billede"
      inputProps={{ autoComplete: "off", type: "file", accept: "image/*" }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { FileFieldInitialValue, FileFieldValidation, FileField };
