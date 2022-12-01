import { useRef } from "react";
import { InputControl } from "formik-chakra-ui";
import { Field } from "formik";
import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
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
  const inputRef = useRef();
  return (
    <Field name="file">
      {({ field }) => (
        <FormControl>
          <FormLabel>Billede</FormLabel>
          <InputGroup>
            <input
              {...field}
              style={{ display: "none" }}
              id="file"
              name="file"
              type="file"
              ref={inputRef}
              value={undefined}
              onChange={(event) => {
                console.log("file", event.currentTarget.files[0]);
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            {/*      <Input
              placeholder={"placeholder" || "Your file ..."}
              onClick={() => inputRef.current.click()}
              value={undefined}
            /> */}
          </InputGroup>
        </FormControl>
      )}
    </Field>
  );
}

export { ImageField, ImageFieldValidation, ImageFieldInitialValue };
