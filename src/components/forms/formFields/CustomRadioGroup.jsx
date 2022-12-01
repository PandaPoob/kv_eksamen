import {
  Box,
  useRadioGroup,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import RadioCard from "./RadioCard";

function CustomRadioGroup({ values, onCallback, name, label }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: "Ja",
    onChange: onCallback,
  });

  const group = getRootProps();

  return (
    <>
      <Field name={name}>
        {({ field, form }) => (
          <FormControl id={name}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <RadioGroup {...field} id={name} {...group}>
              {values.map((value) => (
                <RadioCard key={value} {...field} value={value}>
                  {value}
                </RadioCard>
              ))}
            </RadioGroup>
          </FormControl>
        )}
      </Field>
      {/*       <Box
        name={name}
        {...group}
        mt={4}
        display="grid"
        gridTemplateColumns={{ md: "1fr 1fr 1fr" }}
        borderRadius="0.1rem"
        border="1px solid"
        borderColor={"brand.borderGrey"}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Box> */}
    </>
  );
}

export default CustomRadioGroup;
