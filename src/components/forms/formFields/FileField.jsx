import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";
import {
  FormControl,
  Button,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";

const FileFieldInitialValue = (formState) => {
  console.log("here:", formState.billede);
  return {
    billede: formState?.billede || "",
  };
};

const FileFieldValidation = () => {
  return {
    billede: Yup.mixed().required("Billede påkrævet"),
  };
};

function FileField() {
  return (
    <FormControl margin="normal">
      <InputControl
        name="billede"
        label="Billede"
        inputProps={{
          autoComplete: "off",
          type: "file",
          accept: ".jpg,.png,.jpeg,.webp",
        }}
        labelProps={{ pb: 1 }}
        mt={4}
      />
      <input
        style={{ display: "none" }}
        id="video-upload"
        name={props.field.name}
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
      />
      <label htmlFor="video-upload">
        <Button color="primary" margin="normal" component="span">
          Upload image
        </Button>
      </label>
      {fileName ? (
        <FormHelperText id="video-upload-filename">{fileName}</FormHelperText>
      ) : null}
      {props.errorMessage ? (
        <FormHelperText id="video-upload-helper-text" error={true}>
          {props.errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
    /*     <InputControl
      name="billede"
      label="Billede"
      inputProps={{
        autoComplete: "off",
        type: "file",
        accept: ".jpg,.png,.jpeg,.webp",
      }}
      labelProps={{ pb: 1 }}
      mt={4}
    /> */
  );
}

export { FileFieldInitialValue, FileFieldValidation, FileField };
