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
import {
  CheckboxSingleControl,
  InputControl,
  CheckboxContainer,
} from "formik-chakra-ui";
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
      tlfValgt: formState?.tlfValgt || false,
      tlf: formState?.tlf || "",
      fbValgt: formState?.tlfValgt || false,
      fbNavn: formState?.fbNavn || "",
      fbLink: formState?.fbLink || "",
    };
  };

  const validationSchema = Yup.object({
    ...FullNameFieldValidation(),
    emailValgt: Yup.boolean(),
    email: Yup.string().when("emailValgt", {
      is: (emailValgt) => emailValgt === true,
      then: Yup.string()
        .required("*Udfyld venligst din email")
        .email("*Dette er ikke en gyldig email"),
    }),
    tlfValgt: Yup.boolean(),
    tlf: Yup.string().when("tlfValgt", {
      is: (tlfValgt) => tlfValgt === true,
      then: Yup.string()
        .required("*Udfyld venligst dit telefonnummer")
        .matches(/^[0-9]+$/, "*Et telefonnummer består af tal")
        .length(8, "*Et telefonnummer består af 8 cifre"),
    }),
    fbValgt: Yup.boolean(),
    fbNavn: Yup.string().when("fbValgt", {
      is: (fbValgt) => fbValgt === true,
      then: Yup.string().required("*Udfyld venligst dit Facebook navn"),
    }),
    fbLink: Yup.string().when("fbValgt", {
      is: (fbValgt) => fbValgt === true,
      then: Yup.string().required("*Link venligst din Facebook profil"),
    }),
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

              <CheckboxContainer
                label="Hvordan vil du kontaktes?"
                name="oplysninger"
              ></CheckboxContainer>
              <CheckboxSingleControl name="emailValgt" label="Email" />
              {values.emailValgt ? (
                <InputControl
                  name="email"
                  label="Emailfelt"
                  inputProps={{ placeholder: "example@gmail.com" }}
                  labelProps={{
                    pb: 1,
                    visibility: "hidden",
                    position: "absolute",
                  }}
                />
              ) : null}

              <CheckboxSingleControl name="tlfValgt" label="Telefon" />
              {values.tlfValgt ? (
                <InputControl
                  name="tlf"
                  label="Tlffelt"
                  inputProps={{
                    autoComplete: "off",
                    placeholder: "00 00 00 00",
                  }}
                  labelProps={{
                    pb: 1,
                    visibility: "hidden",
                    position: "absolute",
                  }}
                />
              ) : null}

              <CheckboxSingleControl name="fbValgt" label="Facebook" />
              {values.fbValgt ? (
                <>
                  <InputControl
                    name="fbNavn"
                    label="Facebook navn"
                    inputProps={{
                      autoComplete: "off",
                      placeholder: "Kattens Værn",
                    }}
                    labelProps={{
                      pb: 1,
                    }}
                  />
                  <InputControl
                    name="fbLink"
                    label="Facebook link"
                    inputProps={{
                      autoComplete: "off",
                      placeholder: "https://www.facebook.com/KattensVaern",
                    }}
                    labelProps={{ pb: 1 }}
                  />
                </>
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
