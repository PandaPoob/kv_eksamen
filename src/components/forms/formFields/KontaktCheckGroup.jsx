import { InputControl, CheckboxContainer } from "formik-chakra-ui";
import * as Yup from "yup";
import { Field, useField } from "formik";
import {
  Checkbox,
  Text,
  CheckboxGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import CustomCheck from "./CustomCheck";

const KontaktCheckGroupInitialValue = (formState) => {
  return {
    kontaktmetoder: formState?.kontaktmetoder || [],
  };
};

const KontaktCheckGroupValidation = () => {
  return {
    kontaktmetoder: Yup.array().min(1).of(Yup.string().required()).required(),
  };
};

function KontaktCheckGroup({ setFieldValue, options, values }) {
  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl id={name}>
          <FormLabel>Kontakt</FormLabel>
        </FormControl>
      )}
    </Field>
  );
}

export {
  KontaktCheckGroupInitialValue,
  KontaktCheckGroupValidation,
  KontaktCheckGroup,
};
