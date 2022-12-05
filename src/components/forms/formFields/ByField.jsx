import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const ByFieldInitialValue = (formState) => {
  return {
    by: formState?.by || "",
  };
};

const ByFieldValidation = () => {
  return {
    by: Yup.string().required("*By er påkrævet"),
  };
};

function ByField() {
  return (
    <InputControl
      minH="5.8rem"
      name="by"
      label="By"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ pb: 1 }}
    />
  );
}

export { ByFieldInitialValue, ByFieldValidation, ByField };
