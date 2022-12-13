import { Box, Heading, Button, Divider, Text } from "@chakra-ui/react";
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

function Step2Medlem({ step2Info, setStep2Info, setCurrentStepIndex }) {
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
      cprnr: step2Info?.cprnr || "",
      regnr: step2Info?.regnr || "",
      kontonr: step2Info?.kontonr || "",
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
    cprnr: Yup.string()
      .required("*Udfyld venligst dit CPR-nummer")
      .length(10, "*Et CPR-nummer består af 10 cifre")
      .matches(/^[0-9]+$/, "*Et CPR-nummer består af tal"),
    regnr: Yup.string().required("*Udfyld venligst en reg. nummer"),
    kontonr: Yup.string().required("*Udfyld venligst et kontonummer"),
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

            <Divider orientation="horizontal" my="1.5rem" />
            <Heading as="h2" size={"heading4"} mb="1rem">
              Tilmeld betalingsservice{" "}
            </Heading>
            <Text fontSize="xxs" mb="2rem">
              Kattens Værn er fritaget for gave- og boafgift, så
              gavebeløb/donationer op til 17.000 kroner årligt er
              fradragsberettigede.Når du oplyser dit CPR-nummer, bliver beløbet
              automatisk registreret hos Skat. <br />
              <br /> Hvis du ikke ønsker at oplyse dit CPR-nummer ved
              betalingen, men stadig ønsker at benytte dig af dit fradrag, skal
              du sende en mail til kv@kattens-vaern.dk med dit navn, adresse og
              CPR-nummer, eller ringe til os på 38 88 12 00, lokal 1.
            </Text>

            <InputControl minH="5.8rem" name="cprnr" label="CPR-nummer" />

            <Box
              display={"grid"}
              gridTemplateColumns={{ lg: "1fr 1fr" }}
              gap={"1rem"}
            >
              <InputControl minH="5.8rem" name="regnr" label="Reg. nummer" />

              <InputControl minH="5.8rem" name="kontonr" label="Kontonummer" />
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

export default Step2Medlem;
