import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const EmailFieldInitialValue = (formState) => {
  return {
    email: formState?.fullName || "",
  };
};

const EmailFieldValidation = (valgteMetoder) => {
  console.log(valgteMetoder);
  return {
    /*     email: Yup.string().when(valgteMetoder.includes(email), {
      is: true,
      then: Yup.string().required("*Email er påkrævet"),
    }), */
  };
};

function EmailField({ valgteMetoder }) {
  return (
    <InputControl
      name="email"
      label="Email"
      inputProps={{ autoComplete: "off" }}
      labelProps={{ pb: 1, visibility: "hidden" }}
      mt={4}
    />
  );
}

export { EmailFieldInitialValue, EmailFieldValidation, EmailField };
