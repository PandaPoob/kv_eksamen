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
import { Form, Formik, FieldArray, Field } from "formik";
import * as Yup from "yup";
import { CheckboxSingleControl, InputControl } from "formik-chakra-ui";
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
import {
  EmailFieldInitialValue,
  EmailFieldValidation,
} from "./formFields/EmailField";

function KontaktInfoForm() {
  const [formState, setFormState] = useState("");

  const initialValues = (formState) => {
    return {
      ...FullNameFieldInitialValue(formState),
      emailValgt: formState?.emailValgt || false,
      email: formState?.email || "",
      //...KontaktCheckGroupInitialValue(formState),
      //...EmailFieldInitialValue(formState),
      //valgteMetoder: formState?.valgteMetoder || [],
    };
  };

  const validationSchema = Yup.object({
    ...FullNameFieldValidation(),
    emailValgt: Yup.boolean,
    email: Yup.string()
      .email()
      .when("emailValgt", {
        is: true,
        then: Yup.string().required("Must enter email address"),
      }),
    //...KontaktCheckGroupValidation(),
    //...EmailFieldValidation(formState.valgteMetoder),
  });
  console.log(formState.fullName);
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

              <CheckboxSingleControl name="emailValgt" label="Email" />
              {values.emailValgt ? (
                <InputControl
                  name="email"
                  label="Emailfelt"
                  inputProps={{ autoComplete: "off" }}
                  labelProps={{ pb: 1, visibility: "hidden" }}
                />
              ) : null}

              {/*      <KontaktCheckGroup
                valgteMetoder={values.valgteMetoder}
                errors={errors}
                touched={touched}
              /> */}
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
