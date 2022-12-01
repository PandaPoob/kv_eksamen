import { useState } from "react";
import { Box, Button, Heading, Flex, Text } from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import { SelectControl } from "formik-chakra-ui";
import * as Yup from "yup";
import {
  CatNameField,
  CatNameFieldInitialValue,
  CatNameFieldValidation,
} from "./formFields/CatNameField";
import CustomRadioGroup from "./formFields/CustomRadioGroup";
import {
  OremarkeField,
  OremarkeFieldInitialValue,
  OremarkeFieldValidation,
} from "./formFields/OremarkeField";

function EfterlysForm() {
  const [step1FormState, setStep1FormState] = useState("");
  const [oremarke, setOremarke] = useState("Ja");

  const initialValues = (step1FormState) => {
    console.log("hej", step1FormState);
    return {
      ...CatNameFieldInitialValue(step1FormState),
      ...OremarkeFieldInitialValue(step1FormState),
      kon: step1FormState?.kon || "",
      oremaerket: step1FormState?.oremaerket || "",
    };
  };

  const validationSchema = Yup.object({
    ...CatNameFieldValidation(),
    ...OremarkeFieldValidation(),
  });

  const oremarkeOptions = ["Ja", "Nej", "Ved ikke"];
  const onOremarkeCallback = (value) => {
    setOremarke(value);
  };

  return (
    <Box bg={"brand.white"} p="2rem" boxShadow={"md"}>
      <Heading as="h2" size={"heading3"}>
        Kattens informationer
      </Heading>
      <Formik
        initialValues={initialValues(step1FormState)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <Box minH="6rem">
              <CatNameField />
            </Box>
            <SelectControl
              name="kon"
              label="Kattens køn"
              variant={"outline"}
              mb="2rem"
            >
              <option value={"Hunkat"}>Hunkat</option>
              <option value={"Hankat"}>Hankat</option>
            </SelectControl>

            <CustomRadioGroup
              name="oremaerket"
              values={oremarkeOptions}
              onCallback={onOremarkeCallback}
              label={"Oremaerket"}
            />

            {oremarke === "Ja" ? (
              <Box
                borderBottom={"1px solid"}
                borderLeft="1px solid"
                borderRight="1px solid"
                borderColor="brand.borderGrey"
                minH="6rem"
                px="1rem"
              >
                <OremarkeField />
                <Text
                  fontSize={"xxs"}
                  color="brand.grey"
                  ml="0.2rem"
                  mt={"0.2rem"}
                  mb="1rem"
                >
                  Hvis ikke du kan aflæse øremærket lad feltet stå tomt
                </Text>
              </Box>
            ) : null}
            <Box display={"grid"} justifySelf={"center"} mt={8}>
              <Button type="submit" variant="redBtn" isLoading={isSubmitting}>
                Næste
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default EfterlysForm;
