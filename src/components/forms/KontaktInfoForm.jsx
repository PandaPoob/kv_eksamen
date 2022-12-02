import { useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SelectControl } from "formik-chakra-ui";
import * as Yup from "yup";
import {
  FullNameField,
  FullNameFieldInitialValue,
  FullNameFieldValidation,
} from "./formFields/FullNameField";
import { KontaktCheckGroup } from "./formFields/KontaktCheckGroup";
function KontaktInfoForm() {
  const [formState, setFormState] = useState("");

  const initialValues = (formState) => {
    return {
      ...FullNameFieldInitialValue(formState),
    };
  };

  const validationSchema = Yup.object({
    ...FullNameFieldValidation(),
  });

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

              <KontaktCheckGroup setFieldValue={setFieldValue} />
              {/*               <Box>
                <CustomRadioGroup
                  setFieldValue={setFieldValue}
                  label={"Øremærke"}
                  name={"oremaerket"}
                  options={options}
                  values={values.oremaerket}
                />
                {values.oremaerket === "Ja" ? (
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
              </Box> */}
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
