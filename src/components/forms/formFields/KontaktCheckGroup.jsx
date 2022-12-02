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
    valgteMetoder: formState?.valgteMetoder || [],
  };
};

const KontaktCheckGroupValidation = () => {
  return {
    valgteMetoder: Yup.array()
      .min(1, "*Vælg mindst en metode du kan kontaktes på")
      .of(Yup.string().required())
      .required("*Vælg mindst en metode du kan kontaktes på"),
  };
};

function KontaktCheckGroup({ options, errors, touched }) {
  return (
    <Field name={"valgteMetoder"}>
      {({ field }) => (
        <FormControl id={"valgteMetoder"}>
          {options.map((option) => (
            <Checkbox
              key={option}
              {...field}
              value={option}
              name={"valgteMetoder"}
            >
              {option}
            </Checkbox>
          ))}
          {errors.valgteMetoder && touched.valgteMetoder ? (
            <Text
              fontStyle={"italic"}
              textAlign={"right"}
              color={"brand.errorMsg"}
              fontSize={"xxs"}
            >
              {errors.valgteMetoder}
            </Text>
          ) : null}
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
