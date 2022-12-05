import { useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CheckboxSingleControl, InputControl } from "formik-chakra-ui";
import {
  FullNameField,
  FullNameFieldInitialValue,
  FullNameFieldValidation,
} from "./formFields/FullNameField";
import CatBreadCrumb from "../efterlyst+fremlyst/formsteps/CatBreadCrumb";

function KontaktInfoForm({ onCallback, step2State, setCurrentStepIndex }) {
  //const [formState, setFormState] = useState("");
  const [error, setError] = useState(false);

  const initialValues = (step2State) => {
    return {
      ...FullNameFieldInitialValue(step2State),
      emailValgt: step2State?.emailValgt || false,
      email: step2State?.email || "",
      tlfValgt: step2State?.tlfValgt || false,
      tlf: step2State?.tlf || "",
      fbValgt: step2State?.tlfValgt || false,
      bNavn: step2State?.fbNavn || "",
      fbLink: step2State?.fbLink || "",
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

  return (
    <Box
      bg={"brand.white"}
      p="2rem"
      boxShadow={"md"}
      gridRow={{ lg: "1/2" }}
      borderRadius={"0.2rem"}
    >
      <CatBreadCrumb step={"step2"} setCurrentStepIndex={setCurrentStepIndex} />
      <Heading as="h2" size={"heading3"} textAlign="center" py={"2rem"}>
        Dine oplysninger
      </Heading>
      <Formik
        initialValues={initialValues(step2State)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (values.emailValgt || values.tlfValgt || values.fbValgt) {
            setError(false);
            actions.setSubmitting(false);
            onCallback(values);
            //console.log(values);
          } else {
            setError(true);
            actions.setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <FullNameField />

            <Heading as="h3" size={"heading4"} my="2rem" textAlign={"center"}>
              Hvordan vil du kontaktes?
            </Heading>

            <Box mb={"2rem"}>
              <CheckboxSingleControl
                name="emailValgt"
                label="Email"
                display={"flex"}
                w="50%"
                border={"1px solid"}
                borderColor="brand.borderGrey"
                px={"1rem"}
                py={"0.5rem"}
                bg={values.emailValgt ? "brand.blue" : "brand.white"}
                checkBoxProps={{
                  display: "flex",
                  flexDir: "row-reverse",
                  gap: "1rem",
                  justifyContent: "space-between",
                  flexGrow: "1",
                }}
              />

              {values.emailValgt ? (
                <Box
                  border={"1px solid"}
                  borderColor="brand.borderGrey"
                  minH={"6rem"}
                  px="1rem"
                  py={"0.5rem"}
                >
                  <InputControl
                    name="email"
                    label="Emailfelt"
                    inputProps={{
                      placeholder: "example@gmail.com",
                      mt: "1rem",
                    }}
                    labelProps={{
                      pb: 1,
                      visibility: "hidden",
                      position: "absolute",
                    }}
                  />{" "}
                </Box>
              ) : null}
            </Box>

            <Box mb={"2rem"}>
              <CheckboxSingleControl
                name="tlfValgt"
                label="Telefon"
                display={"flex"}
                w="50%"
                border={"1px solid"}
                borderColor="brand.borderGrey"
                px={"1rem"}
                py={"0.5rem"}
                bg={values.tlfValgt ? "brand.blue" : "brand.white"}
                checkBoxProps={{
                  display: "flex",
                  flexDir: "row-reverse",
                  gap: "1rem",
                  justifyContent: "space-between",
                  flexGrow: "1",
                }}
              />
              {values.tlfValgt ? (
                <Box
                  border={"1px solid"}
                  borderColor="brand.borderGrey"
                  minH={"6rem"}
                  px="1rem"
                  py={"0.5rem"}
                >
                  <InputControl
                    name="tlf"
                    label="Tlffelt"
                    inputProps={{
                      autoComplete: "off",
                      placeholder: "00 00 00 00",
                      mt: "1rem",
                    }}
                    labelProps={{
                      pb: 1,
                      visibility: "hidden",
                      position: "absolute",
                    }}
                  />
                </Box>
              ) : null}
            </Box>

            <Box mb={"2rem"}>
              <CheckboxSingleControl
                name="fbValgt"
                label="Facebook"
                display={"flex"}
                w="50%"
                border={"1px solid"}
                borderColor="brand.borderGrey"
                px={"1rem"}
                py={"0.5rem"}
                bg={values.fbValgt ? "brand.blue" : "brand.white"}
                checkBoxProps={{
                  display: "flex",
                  flexDir: "row-reverse",
                  gap: "1rem",
                  justifyContent: "space-between",
                  flexGrow: "1",
                }}
              />
              {values.fbValgt ? (
                <Box
                  border={"1px solid"}
                  borderColor="brand.borderGrey"
                  minH={"14rem"}
                  px="1rem"
                  py={"0.5rem"}
                >
                  <InputControl
                    name="fbNavn"
                    label="Facebook navn"
                    minH="6rem"
                    inputProps={{
                      autoComplete: "off",
                      placeholder: "Kattens Værn",
                    }}
                    labelProps={{
                      mt: "1rem",
                    }}
                  />
                  <InputControl
                    name="fbLink"
                    label="Facebook link"
                    minH="6rem"
                    inputProps={{
                      autoComplete: "off",
                      placeholder: "https://www.facebook.com/KattensVaern",
                    }}
                    labelProps={{ pb: 1 }}
                  />
                </Box>
              ) : null}
            </Box>

            {error ? (
              <Text
                fontStyle={"italic"}
                textAlign={"right"}
                color={"brand.errorMsg"}
                fontSize={"xxs"}
              >
                *Vælg mindst en måde du kan kontaktes på
              </Text>
            ) : null}
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
