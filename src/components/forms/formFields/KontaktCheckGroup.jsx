import { InputControl, CheckboxContainer } from "formik-chakra-ui";
import * as Yup from "yup";
import { Field } from "formik";
import { Checkbox, Text, CheckboxGroup, useCheckbox } from "@chakra-ui/react";

const KontaktCheckGroupInitialValue = (formState) => {
  return {
    descrip: formState?.descrip || "",
  };
};

const KontaktCheckGroupValidation = () => {
  return {
    descrip: Yup.string()
      .required("*Beskrivelse er påkrævet")
      .max(500, "*Max 500 tegn"),
  };
};

function KontaktCheckGroup({ setFieldValue }) {
  return (
    <Field name="email">
      {({ field }) => (
        <CheckboxGroup {...field}>
          <Checkbox
            id="email"
            name="email"
            onChange={(e) => setFieldValue("email", e.target.checked)}
          >
            <Text fontSize="sm" textAlign="left">
              Email
            </Text>
          </Checkbox>
        </CheckboxGroup>
      )}
    </Field>
  );
}

export {
  KontaktCheckGroupInitialValue,
  KontaktCheckGroupValidation,
  KontaktCheckGroup,
};
