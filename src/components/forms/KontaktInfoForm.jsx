import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  CheckboxGroup,
  Checkbox,
  FormControl,
} from "@chakra-ui/react";
import { CheckboxContainer } from "formik-chakra-ui";
import { Form, Formik, FieldArray, Field } from "formik";
import * as Yup from "yup";
import {
  FullNameField,
  FullNameFieldInitialValue,
  FullNameFieldValidation,
} from "./formFields/FullNameField";
import {
  KontaktCheckGroup,
  KontaktCheckGroupValidation,
  KontaktCheckGroupInitialValue,
} from "./formFields/KontaktCheckGroup";
function KontaktInfoForm() {
  const [formState, setFormState] = useState("");
  console.log(formState);
  const initialValues = (formState) => {
    return {
      ...FullNameFieldInitialValue(formState),
      ...KontaktCheckGroupInitialValue(formState),
      //valgteMetoder: formState?.valgteMetoder || [],
    };
  };

  const validationSchema = Yup.object({
    ...FullNameFieldValidation(),
    ...KontaktCheckGroupValidation(),
  });

  const options = ["Email", "Telefon", "Facebook"];

  return (
    <Box bg={"brand.white"} p="2rem" boxShadow={"md"}>
      <Heading as="h2" size={"heading3"}>
        Dine oplysninger
      </Heading>
      <Formik
        initialValues={initialValues(formState)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
          //onCallback(values);
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          values,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <Box display="grid" gap={"1rem"}>
              <Box minH="6rem">
                <FullNameField />
              </Box>

              <KontaktCheckGroup
                options={options}
                errors={errors}
                touched={touched}
              />
            </Box>

            <Box display={"grid"} justifySelf={"center"} mt={8}>
              <Button
                type="submit"
                variant="formSubmitBtn"
                isLoading={isSubmitting}
              >
                Næste
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default KontaktInfoForm;
