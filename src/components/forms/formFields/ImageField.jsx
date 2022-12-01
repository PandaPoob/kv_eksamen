import React, { useState } from "react";
import { InputControl } from "formik-chakra-ui";
import { Field } from "formik";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as Yup from "yup";

const ImageFieldInitialValue = (formState) => {
  return {
    file: formState?.file || "",
  };
};
const ImageFieldValidation = () => {
  return {
    file: Yup.mixed().required("Billede påkrævet"),
  };
};

function ImageField({ setFieldValue }) {
  return (
    <Field name="file">
      {({ field }) => (
        <FormControl>
          <FormLabel>Billede</FormLabel>
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
        </FormControl>
      )}
    </Field>
  );
}

export { ImageField, ImageFieldValidation, ImageFieldInitialValue };
