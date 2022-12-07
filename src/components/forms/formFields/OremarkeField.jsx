import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const OremarkeFieldInitialValue = (formState) => {
  return {
    oremaerkenr: formState?.oremaerkenr || "",
  };
};

const OremarkeFieldValidation = () => {
  return {
    oremaerkenr: Yup.string()
      .nullable()
      .notRequired()
      .length(6, "*Et øremærke består af 6 tegn"),
  };
};

function OremarkeField() {
  return (
    <InputControl
      minH="5.8rem"
      name="oremaerkenr"
      label="Øremærke"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ visibility: "hidden", fontSize: "xxs" }}
    />
  );
}

export { OremarkeFieldInitialValue, OremarkeFieldValidation, OremarkeField };
