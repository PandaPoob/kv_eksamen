import { TextareaControl } from "formik-chakra-ui";
import * as Yup from "yup";

const DescripFieldInitialValue = (formState) => {
  return {
    descrip: formState?.descrip || "",
  };
};

const DescripFieldValidation = () => {
  return {
    descrip: Yup.string()
      .required("*Beskrivelse er påkrævet")
      .max(500, "*Max 500 tegn"),
  };
};

function DescripField() {
  return (
    <TextareaControl
      name="descrip"
      label="Beskrivelse"
      textareaProps={{ autoComplete: "off", variant: "form" }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { DescripFieldInitialValue, DescripFieldValidation, DescripField };
