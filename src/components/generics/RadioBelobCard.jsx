import { Box, Text } from "@chakra-ui/react";
import { useRadio } from "@chakra-ui/react";

export default function RadioBelobCard(props) {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg="brand.white"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="0.2rem"
        boxShadow="md"
        _checked={{
          color: "brand.darkGrey",
          borderWidth: "2px",
          borderColor: "brand.redCta",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
