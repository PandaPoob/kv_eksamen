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

function ByField({ pos }) {
  return (
    <InputControl
      gridRow={{ lg: pos }}
      minH="5.8rem"
      name="by"
      label="By"
      inputProps={{ autoComplete: "off" }}
    />
  );
}

export { ByFieldInitialValue, ByFieldValidation, ByField };
