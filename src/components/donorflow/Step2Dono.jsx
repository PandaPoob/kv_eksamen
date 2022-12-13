import { Box, Heading, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SelectControl, InputControl } from "formik-chakra-ui";

import { useMemo } from "react";
import countryList from "react-select-country-list";
import * as Yup from "yup";
import {
  FullNameField,
  FullNameFieldInitialValue,
  FullNameFieldValidation,
} from "../forms/formFields/FullNameField";
import {
  PostnummerFieldInitialValue,
  PostnummerFieldValidation,
  PostnummerField,
} from "../forms/formFields/PostnummerField";
import {
  ByField,
  ByFieldInitialValue,
  ByFieldValidation,
} from "../forms/formFields/ByField";

function Step2Dono({ step2Info, setStep2Info, setCurrentStepIndex }) {
  //get country listdata
  const options = useMemo(() => countryList().getData(), []);

  const initialValues = (step2Info) => {
    return {
      ...FullNameFieldInitialValue(step2Info),
      ...PostnummerFieldInitialValue(step2Info),
      ...ByFieldInitialValue(step2Info),
      email: step2Info?.email || "",
      land: step2Info?.land || "Denmark",
      adresse: step2Info?.adresse || "",
    };
  };

  const validationSchema = Yup.object({
    ...FullNameFieldValidation(),
    ...PostnummerFieldValidation(),
    ...ByFieldValidation(),
    email: Yup.string()
      .required("*Udfyld venligst din email")
      .email("*Dette er ikke en gyldig email"),
    land: Yup.string().required("*Vælg venligst et land"),
    adresse: Yup.string().required("*Udfyld venligst din adresse"),
  });

  return (
    <Box
      mb="4rem"
      mx="1rem"
      justifySelf="center"
      bg={"brand.white"}
      p={{ base: "1rem", md: "2rem", xl: "3rem" }}
      boxShadow={"md"}
      borderRadius={"0.2rem"}
      maxW="container.md"
    >
      <Heading
        as="h1"
        size={"heading3"}
        textAlign="center"
        py={{ base: "1rem" }}
      >
        Din information
      </Heading>
      <Formik
        initialValues={initialValues(step2Info)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          setStep2Info(values);
          window.scrollTo(0, 0);
          setCurrentStepIndex(2);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <Box display="grid" gap={"0.5rem"}>
              <FullNameField label="Dit fulde navn" />

              <InputControl
                minH="5.8rem"
                name="email"
                label="Email"
                inputProps={{
                  placeholder: "example@gmail.com",
                }}
              />

              <InputControl
                minH="5.8rem"
                name="adresse"
                label="Adresse"
                inputProps={{
                  placeholder: "Sandager 11",
                }}
              />
              <SelectControl
                minH="5.8rem"
                name="land"
                label="Land"
                variant={"outline"}
              >
                <option value={""}>Vælg land</option>
                {options.map((o) => {
                  return (
                    <option key={o.value} value={o.label}>
                      {o.label}
                    </option>
                  );
                })}
              </SelectControl>

              <Box
                display={"grid"}
                gridTemplateColumns={{ lg: "1fr 1fr" }}
                gap={"1rem"}
              >
                <PostnummerField pos={"1/2"} />

                <ByField pos={""} />
              </Box>
            </Box>

            <Box display={"grid"} justifySelf={"center"} mt={"3rem"} mb="1rem">
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

export default Step2Dono;
