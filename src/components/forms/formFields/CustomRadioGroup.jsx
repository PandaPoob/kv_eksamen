import { Box, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

function CustomRadioGroup({ values, onCallback, name }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: "Ja",
    onChange: onCallback,
  });

  const group = getRootProps();

  return (
    <Box
      name={name}
      {...group}
      mt={4}
      display="grid"
      gridTemplateColumns={{ md: "1fr 1fr 1fr" }}
      borderRadius="0.1rem"
      border="1px solid"
      borderColor={"brand.borderGrey"}
    >
      {values.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Box>
  );
}

export default CustomRadioGroup;
