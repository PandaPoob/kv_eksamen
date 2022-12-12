import { Box, useRadio } from "@chakra-ui/react";

function RadioBelobCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

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
        boxShadow="md"
        _checked={{
          color: "brand.darkGrey",
          borderWidth: "3px",
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

export default RadioBelobCard;
