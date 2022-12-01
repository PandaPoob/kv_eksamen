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
    billede: Yup.mixed().required("Billede påkrævet"),
  };
};

function FileField() {
  return (
    <InputControl
      name="billede"
      label="Billede"
      inputProps={{
        autoComplete: "off",
        type: "file",
        accept: ".jpg,.png,.jpeg,.webp",
      }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { FileFieldInitialValue, FileFieldValidation, FileField };
