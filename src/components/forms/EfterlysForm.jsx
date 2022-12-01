import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormLabel,
  Text,
  FormControl,
  RadioGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
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
import RadioCard from "./formFields/RadioCard";

function EfterlysForm() {
  const [formState, setFormState] = useState("");
  const [oremarke, setOremarke] = useState("Ja");
  const [chippet, setChippet] = useState("Ja");

  const initialValues = (formState) => {
    console.log("hej", formState);
    return {
      ...CatNameFieldInitialValue(formState),
      //  ...OremarkeFieldInitialValue(formState),
      kon: formState?.kon || "",
      // oremaerket: formState?.oremaerket || "",
      chippet: formState?.chippet || "Ja",
    };
  };

  const validationSchema = Yup.object({
    ...CatNameFieldValidation(),
    // ...OremarkeFieldValidation(),
    //oremaerket: Yup.string().required(),
    chippet: Yup.string().required(),
  });

  const options = ["Ja", "Nej", "Ved ikke"];
  const onOremarkeCallback = (value) => {
    setOremarke(value);
  };
  const onChippetCallback = (value) => {
    setChippet(value);
  };

  return (
    <Box bg={"brand.white"} p="2rem" boxShadow={"md"}>
      <Heading as="h2" size={"heading3"}>
        Kattens informationer
      </Heading>
      <Formik
        initialValues={initialValues(formState)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
        }}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
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

            {/*            <FormLabel>Øremærket</FormLabel>
            <CustomRadioGroup
              name="oremaerket"
              values={options}
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
 */}
            {/* <CustomRadioGroup
              name="chippet"
              values={options}
              onCallback={onChippetCallback}
              label={"Chipnummer"}
            /> */}
            <Field name={"chippet"}>
              {({ field }) => (
                <FormControl id={"chippet"}>
                  <FormLabel>chippet Label</FormLabel>
                  <RadioGroup {...field} value={values.chippet}>
                    {options.map((value) => (
                      <RadioCard
                        key={value}
                        {...field}
                        value={value}
                        isChecked={values.chippet === value}
                        onChange={() => setFieldValue("chippet", value)}
                      >
                        {value}
                      </RadioCard>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            </Field>

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
