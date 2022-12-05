import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const ChipnummerFieldInitialValue = (formState) => {
  return {
    chipnummer: formState?.oremaerkenr || "",
  };
};

const ChipnummerFieldValidation = () => {
  return {
    chipnummer: Yup.string()
      .nullable()
      .notRequired()
      .min(15, "*Et chipnummer består mindst af 15 tegn")
      .max(16, "*Et chipnummer består max af 16 tegn"),
  };
};

function ChipnummerField() {
  return (
    <InputControl
      minH="5.8rem"
      name="chipnummer"
      label="Chipnummer"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ visibility: "hidden", fontSize: "xxs" }}
    />
  );
}

export {
  ChipnummerFieldInitialValue,
  ChipnummerFieldValidation,
  ChipnummerField,
};
