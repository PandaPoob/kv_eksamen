import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { SelectControl } from "formik-chakra-ui";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import CatBreadCrumb from "../../components/efterlyst_fremlyst/formsteps/CatBreadCrumb";
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
import {
  ChipnummerField,
  ChipnummerFieldInitialValue,
  ChipnummerFieldValidation,
} from "./formFields/ChipnummerField";
import {
  DescripField,
  DescripFieldInitialValue,
  DescripFieldValidation,
} from "./formFields/DescripField";
import {
  DatoField,
  DatoFieldInitialValue,
  DatoFieldValidation,
} from "./formFields/DatoField";
import {
  PostnummerFieldInitialValue,
  PostnummerFieldValidation,
  PostnummerField,
} from "./formFields/PostnummerField";
import {
  ByField,
  ByFieldInitialValue,
  ByFieldValidation,
} from "./formFields/ByField";
import {
  ImageField,
  ImageFieldValidation,
  ImageFieldInitialValue,
} from "./formFields/ImageField";

function EfterlysForm({ step1State, onCallback, setCurrentStepIndex }) {
  const initialValues = (step1State) => {
    return {
      ...CatNameFieldInitialValue(step1State),
      ...OremarkeFieldInitialValue(step1State),
      ...ChipnummerFieldInitialValue(step1State),
      ...DatoFieldInitialValue(step1State),
      ...ImageFieldInitialValue(step1State),
      ...DescripFieldInitialValue(step1State),
      ...PostnummerFieldInitialValue(step1State),
      ...ByFieldInitialValue(step1State),
      kon: step1State?.kon || "",
      oremaerket: step1State?.oremaerket || "Ja",
      chippet: step1State?.chippet || "Ja",
      landsdel: step1State?.landsdel || "",
    };
  };

  const validationSchema = Yup.object({
    ...CatNameFieldValidation(),
    ...OremarkeFieldValidation(),
    ...ChipnummerFieldValidation(),
    ...DatoFieldValidation(),
    ...ImageFieldValidation(),
    ...DescripFieldValidation(),
    ...PostnummerFieldValidation(),
    ...ByFieldValidation(),
    kon: Yup.string().required("*Køn er påkrævet"),
    oremaerket: Yup.string().required("*Øremærke er påkrævet"),
    chippet: Yup.string().required("*Chipnummer er påkrævet"),
    landsdel: Yup.string().required("*Landsdel er påkrævet"),
  });

  const options = ["Ja", "Nej", "Ved ikke"];

  return (
    <Box
      bg={"brand.white"}
      p={{ base: "1rem", md: "2rem", xl: "3rem" }}
      boxShadow={"md"}
      gridRow={{ lg: "1/2" }}
      borderRadius={"0.2rem"}
      minW={{ base: "90vw", md: "80vw", lg: "0" }}
    >
      <CatBreadCrumb setCurrentStepIndex={setCurrentStepIndex} step={"step1"} />
      <Heading
        as="h2"
        size={"heading3"}
        textAlign="center"
        py={{ base: "2rem", lg: "3rem" }}
      >
        Kattens informationer
      </Heading>
      <Formik
        initialValues={initialValues(step1State)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          //console.log(values);
          actions.setSubmitting(false);
          onCallback(values);
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
            <Box display="grid" gap={"0.5rem"}>
              <Box
                display="grid"
                gap={"1rem"}
                gridTemplateColumns={{ lg: "1fr 1fr" }}
              >
                <CatNameField />

                <SelectControl
                  minH="5.8rem"
                  name="kon"
                  label="Kattens køn"
                  variant={"outline"}
                >
                  <option value={""}>Vælg køn</option>
                  <option value={"Hunkat"}>Hunkat</option>
                  <option value={"Hankat"}>Hankat</option>
                </SelectControl>
              </Box>
              <Box mb={"1rem"}>
                <CustomRadioGroup
                  setFieldValue={setFieldValue}
                  label={"Øremærke"}
                  name={"oremaerket"}
                  options={options}
                  values={values.oremaerket}
                />{" "}
                <AnimatePresence>
                  {values.oremaerket === "Ja" ? (
                    <Box
                      as={motion.div}
                      initial={{ opacity: 0, y: "-50%" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      key="oremaerket"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "linear" }}
                    >
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
                    </Box>
                  ) : null}{" "}
                </AnimatePresence>
              </Box>

              <Box mb={"1rem"}>
                <CustomRadioGroup
                  setFieldValue={setFieldValue}
                  label={"Chipnummer"}
                  name={"chippet"}
                  options={options}
                  values={values.chippet}
                />{" "}
                <AnimatePresence>
                  {values.chippet === "Ja" ? (
                    <Box
                      as={motion.div}
                      initial={{ opacity: 0, y: "-50%" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      key="chippet"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "linear" }}
                    >
                      <Box
                        borderBottom={"1px solid"}
                        borderLeft="1px solid"
                        borderRight="1px solid"
                        borderColor="brand.borderGrey"
                        minH="6rem"
                        px="1rem"
                      >
                        <ChipnummerField />
                        <Text
                          fontSize={"xxs"}
                          color="brand.grey"
                          ml="0.2rem"
                          mt={"0.2rem"}
                          mb="1rem"
                        >
                          Hvis ikke du kender chipnummeret lad feltet stå tomt
                        </Text>
                      </Box>
                    </Box>
                  ) : null}{" "}
                </AnimatePresence>
              </Box>

              <ImageField
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                values={values}
              />

              <DescripField />

              <Heading as="h2" size={"heading4"} textAlign="center">
                Katten er sidst set
              </Heading>

              <Box
                display={"grid"}
                mt="1rem"
                gridTemplateColumns={{ lg: "1fr 1fr" }}
                gap={"1rem"}
              >
                <DatoField values={values.dato} />

                <PostnummerField />

                <ByField />

                <SelectControl
                  minH="5.8rem"
                  name="landsdel"
                  label="Landsdel"
                  variant={"outline"}
                  gridRow={{ lg: "1/2" }}
                  gridColumn={{ lg: "2/3" }}
                >
                  <option value={""}>Vælg landsdel</option>
                  <option value={"København og omegn"}>
                    København og omegn
                  </option>
                  <option value={"Sjælland og øerne"}>Sjælland og øerne</option>
                  <option value={"Fyn og øerne"}>Fyn og øerne</option>
                  <option value={"Sønderjylland"}>Sønderjylland</option>
                  <option value={"Midtjylland"}>Midtjylland</option>
                  <option value={"Nordjylland"}>Nordjylland</option>
                  <option value={"Bornholm"}>Bornholm</option>
                  <option value={"Udlandet"}>Udlandet</option>
                </SelectControl>
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

export default EfterlysForm;
