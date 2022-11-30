import { useState } from "react";
import { Box, Button, Heading, Flex, useRadioGroup } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SelectControl } from "formik-chakra-ui";
import * as Yup from "yup";
import {
  CatNameField,
  CatNameFieldInitialValue,
  CatNameFieldValidation,
} from "../forms/CatNameField";
import RadioCard from "./RadioCard";

function EfterlysForm() {
  const [step1FormState, step2FormState] = useState("");

  const initialValues = (step1FormState) => {
    return {
      ...CatNameFieldInitialValue(step1FormState),
      kon: step1FormState?.kon || "",
    };
  };

  const validationSchema = Yup.object({
    ...CatNameFieldValidation(),
  });

  const options = ["Ja", "Nej", "Ved ikke"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Øremærke",
    defaultValue: "Ja",
    onChange: console.log,
  });

  const group = getRootProps();

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
            <CatNameField />

            <SelectControl
              name="kon"
              label="Kattens køn"
              variant={"outline"}
              mt="1rem"
            >
              <option value={"Hunkat"}>Hunkat</option>
              <option value={"Hankat"}>Hankat</option>
            </SelectControl>

            <Flex {...group} mt={4}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </Flex>

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
