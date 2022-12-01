import { Field } from "formik";
import { FormControl, Text, FormLabel, InputGroup } from "@chakra-ui/react";
import * as Yup from "yup";

const ImageFieldInitialValue = (formState) => {
  return {
    file: formState?.file || "",
  };
};
const ImageFieldValidation = () => {
  return {
    file: Yup.mixed().required("*Billede påkrævet"),
  };
};

function ImageField({ setFieldValue, touched, errors }) {
  return (
    <Field name="file">
      {({ field }) => (
        <FormControl>
          <FormLabel>Billede</FormLabel>
          <InputGroup>
            <input
              style={{
                borderRadius: "0.2rem",
                border: "1px solid #B8B8B8",
                fontSize: "xs",
                minHeight: "2rem",
                flexGrow: "1",
              }}
              {...field}
              id="file"
              name="file"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              value={undefined}
              onChange={(event) => {
                console.log("file", event.currentTarget.files[0]);
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
          </InputGroup>

          {errors.file && touched.file ? (
            <Text color={"brand.errorMsg"} fontSize={"xxs"}>
              {errors.file}
            </Text>
          ) : null}
        </FormControl>
      )}
    </Field>
  );
}

export { ImageField, ImageFieldValidation, ImageFieldInitialValue };
