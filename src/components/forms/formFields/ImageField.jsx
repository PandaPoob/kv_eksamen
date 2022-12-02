import { Field } from "formik";
import {
  FormControl,
  Text,
  FormLabel,
  InputGroup,
  FormHelperText,
  Icon,
  Flex,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { BiUpload } from "react-icons/bi";

const ImageFieldInitialValue = (formState) => {
  return {
    file: formState?.file || "",
  };
};
const ImageFieldValidation = () => {
  return {
    file: Yup.mixed()
      .required("*Billede påkrævet")
      .test("fileType", "*Filtype understøttes ikke", (value) => {
        return (
          value &&
          (value.type === "image/jpeg" ||
            value.type === "image/webp" ||
            value.type === "image/png")
        );
      })
      .test("fileSize", "*Max 5 MB", (value) => value && value.size <= 5000000),
  };
};

function ImageField({ setFieldValue, touched, errors, values }) {
  return (
    <Field name="file">
      {({ field }) => (
        <FormControl>
          <FormLabel>Billede</FormLabel>
          <InputGroup
            border={"1px solid #B8B8B8"}
            borderColor={
              errors.file && touched.file
                ? "brand.errorMsg"
                : "brand.borderGrey"
            }
            borderRadius={"0.2rem"}
            position="relative"
            fontSize={"xxs"}
          >
            <label
              htmlFor="file"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBlock: "0.5rem",
                width: "8rem",
                gap: "0.2rem",
                paddingRight: "0.5rem",
                backgroundColor: "#EEEEEE",
                color: "#001931",
                borderRadius: "0.2rem",
                borderRight: "1px solid #B8B8B8",
                cursor: "pointer",
                _hover: { bg: "brand.borderGrey" },
              }}
            >
              <Icon as={BiUpload} />
              Upload fil
            </label>
            <Text
              color={"brand.grey"}
              fontSize={"xs"}
              alignSelf={"center"}
              pl="1rem"
            >
              {!values.file ? null : values.file.name}
            </Text>
            <input
              style={{
                background: "red",
                opacity: "0",
                overflow: "hidden",
                position: "absolute",
                width: " 0.1px",
                height: "0.1px",
              }}
              {...field}
              id="file"
              name="file"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              value={undefined}
              onChange={(event) => {
                //console.log("file", event.currentTarget.files[0]);
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
          </InputGroup>
          <Flex
            alignItems={"center"}
            justifyContent="space-between"
            mt={"0.2rem"}
          >
            <FormHelperText fontSize={"xxs"} color="brand.grey" mt={0}>
              Upload bredformat. Filer max 5 MB. Filtyper: .jpg .jpeg .png .webp
            </FormHelperText>
            {errors.file && touched.file ? (
              <Text
                fontStyle={"italic"}
                textAlign={"right"}
                color={"brand.errorMsg"}
                fontSize={"xxs"}
              >
                {errors.file}
              </Text>
            ) : null}
          </Flex>
        </FormControl>
      )}
    </Field>
  );
}

export { ImageField, ImageFieldValidation, ImageFieldInitialValue };
