import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const CatNameFieldInitialValue = (formState) => {
  return {
    catname: formState?.catname || "",
  };
};

const CatNameFieldValidation = () => {
  return {
    catname: Yup.string()
      .required("*Kattens navn er påkrævet")
      .max(16, `*Max 16 tegn`),
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
