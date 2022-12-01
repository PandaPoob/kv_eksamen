import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const DatoFieldInitialValue = (formState) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  console.log(today);

  // This arrangement can be altered based on how we want the date's format to appear.
  //let currentDate = `${year}-${month}-${day}`;
  return {
    dato: formState?.dato || today,
  };
};

const DatoFieldValidation = () => {
  return {
    dato: Yup.date().required("*Dato er påkrævet"),
  };
};

function DatoField({ values }) {
  // console.log(values.dato);
  return (
    <InputControl
      name="dato"
      label="Dato"
      inputProps={{
        autoComplete: "off",
        type: "date",
      }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { DatoFieldInitialValue, DatoFieldValidation, DatoField };
