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
      minH="5.8rem"
      name="catname"
      label="Kattens navn"
      inputProps={{ autoComplete: "off" }}
    />
  );
}

export { CatNameFieldInitialValue, CatNameFieldValidation, CatNameField };
