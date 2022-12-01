import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const OremarkeFieldInitialValue = (step1FormState) => {
  return {
    oremaerkenr: step1FormState?.oremaerkenr || "",
  };
};

const OremarkeFieldValidation = () => {
  return {
    oremaerkenr: Yup.string()
      .nullable()
      .notRequired()
      .length(6, "Et øremærke er altid 6 tegn"),
  };
};

function OremarkeField() {
  return (
    <InputControl
      name="oremaerkenr"
      label="Øremærke"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ visibility: "hidden", fontSize: "xxs" }}
    />
  );
}

export { OremarkeFieldInitialValue, OremarkeFieldValidation, OremarkeField };
