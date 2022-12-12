import { FormControl, FormLabel, RadioGroup } from "@chakra-ui/react";
import { Field } from "formik";
import RadioCard from "./RadioCard";

function CustomRadioGroup({ values, setFieldValue, name, options, label }) {
  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl id={name} position="relative" zIndex={2} bg="brand.white">
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            {...field}
            value={values}
            mt={"0.2rem"}
            borderRadius="0.1rem"
            border="1px solid"
            borderColor="brand.borderGrey"
            display="grid"
            gridTemplateColumns={{ md: "1fr 1fr 1fr" }}
          >
            {options.map((value) => (
              <RadioCard
                key={value}
                {...field}
                value={value}
                isChecked={values === value}
                onChange={() => setFieldValue(name, value)}
              >
                {value}
              </RadioCard>
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </Field>
  );
}

export default CustomRadioGroup;
