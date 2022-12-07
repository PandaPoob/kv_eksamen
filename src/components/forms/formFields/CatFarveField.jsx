import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const CatFarveFieldInitialValue = (formState) => {
  return {
    farve: formState?.farve || "",
  };
};

const CatFarveFieldValidation = () => {
  return {
    farve: Yup.string()
      .required("*Kattens farve er påkrævet")
      .max(16, `*Max 16 tegn`),
  };
};

function CatFarveField() {
  return (
    <InputControl
      minH="5.8rem"
      name="farve"
      label="Kattens farve"
      inputProps={{ autoComplete: "off", placeholder: "Brunstribet/sort" }}
    />
  );
}

export { CatFarveFieldInitialValue, CatFarveFieldValidation, CatFarveField };
