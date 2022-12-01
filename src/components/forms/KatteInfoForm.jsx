import { useState } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Form, Formik, Field, useField } from "formik";
import { SelectControl, InputControl } from "formik-chakra-ui";

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
import {
  ChipnummerField,
  ChipnummerFieldInitialValue,
  ChipnummerFieldValidation,
} from "./formFields/ChipnummerField";
import {
  FileField,
  FileFieldInitialValue,
  FileFieldValidation,
} from "./formFields/FileField";
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

function KatteInfoForm({ onCallback }) {
  const [formState, setFormState] = useState("");
  const [img, setImg] = useState("");

  console.log(img);
  const initialValues = (formState) => {
    return {
      ...CatNameFieldInitialValue(formState),
      ...OremarkeFieldInitialValue(formState),
      ...ChipnummerFieldInitialValue(formState),
      ...DatoFieldInitialValue(formState),
      ...ImageFieldInitialValue(formState),
      // ...FileFieldInitialValue(formState),
      ...DescripFieldInitialValue(formState),
      ...PostnummerFieldInitialValue(formState),
      ...ByFieldInitialValue(formState),
      kon: formState?.kon || "",
      oremaerket: formState?.oremaerket || "Ja",
      chippet: formState?.chippet || "Ja",
      landsdel: formState?.landsdel || "",
    };
  };

  const validationSchema = Yup.object({
    ...CatNameFieldValidation(),
    ...OremarkeFieldValidation(),
    ...ChipnummerFieldValidation(),
    ...DatoFieldValidation(),
    ...ImageFieldValidation(),
    //...FileFieldValidation(),
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
    <Box bg={"brand.white"} p="2rem" boxShadow={"md"}>
      <Heading as="h2" size={"heading3"}>
        Kattens informationer
      </Heading>
      <Formik
        initialValues={initialValues(formState)}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          onCallback(values);
        }}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <Box display="grid" gap={"1rem"}>
              <Box minH="6rem">
                <CatNameField />
              </Box>
              <SelectControl name="kon" label="Kattens køn" variant={"outline"}>
                <option value={""}>Vælg køn</option>
                <option value={"Hunkat"}>Hunkat</option>
                <option value={"Hankat"}>Hankat</option>
              </SelectControl>

              <Box>
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
              </Box>

              <Box>
                <CustomRadioGroup
                  setFieldValue={setFieldValue}
                  label={"Chipnummer"}
                  name={"chippet"}
                  options={options}
                  values={values.chippet}
                />
                {values.chippet === "Ja" ? (
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
                ) : null}
              </Box>

              {/*           <Field name="file">
                {({ field }) => (
                  <input
                    {...field}
                    id="file"
                    name="file"
                    type="file"
                    value={undefined}
                    onChange={(event) => {
                      console.log("file", event.currentTarget.files[0]);
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                )}
              </Field> */}
              {/*    <FileField /> */}
              <ImageField setFieldValue={setFieldValue} />
              <DescripField />

              <Heading as="h2" size={"heading3"}>
                Kattens er sidst set
              </Heading>

              <DatoField values={values} />

              <PostnummerField />

              <ByField />

              <SelectControl
                name="landsdel"
                label="Landsdel"
                variant={"outline"}
              >
                <option value={""}>Vælg landsdel</option>
                <option value={"København og omegn"}>København og omegn</option>
                <option value={"Sjælland og øerne"}>Sjælland og øerne</option>
                <option value={"Fyn og øerne"}>Fyn og øerne</option>
                <option value={"Sønderjylland"}>Sønderjylland</option>
                <option value={"Midtjylland"}>Midtjylland</option>
                <option value={"Nordjylland"}>Nordjylland</option>
                <option value={"Bornholm"}>Bornholm</option>
                <option value={"Udlandet"}>Udlandet</option>
              </SelectControl>
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

export default KatteInfoForm;
