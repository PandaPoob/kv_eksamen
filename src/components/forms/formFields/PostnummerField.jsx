import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const PostnummerFieldInitialValue = (formState) => {
  return {
    postnummer: formState?.postnummer || "",
  };
};

const PostnummerFieldValidation = () => {
  return {
    postnummer: Yup.string()
      .required("*Postnummer er påkrævet")
      .length(4, "*Et postnummer består af 4 cifre")
      .matches(/^[0-9]+$/, "*Postnummer består af tal"),
  };
};

function PostnummerField() {
  return (
    <InputControl
      minH="5.8rem"
      name="postnummer"
      label="Postnummer"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ fontSize: "xxs" }}
    />
  );
}

export {
  PostnummerFieldInitialValue,
  PostnummerFieldValidation,
  PostnummerField,
};
