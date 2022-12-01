import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const CatNameFieldInitialValue = (step1FormState) => {
  return {
    catname: step1FormState?.catname || "",
  };
};

const CatNameFieldValidation = () => {
  return {
    catname: Yup.string()
      .required("*Kattens navn er påkrævet")
      .max(16, `*Kan ikke være længere end 16 tegn`),
  };
};

function CatNameField() {
  return (
    <InputControl
      name="catname"
      label="Kattens navn"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { CatNameFieldInitialValue, CatNameFieldValidation, CatNameField };
