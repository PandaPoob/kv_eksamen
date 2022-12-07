import { Box, useRadio } from "@chakra-ui/react";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color={"brand.grey"}
        bg="brand.lightGrey"
        borderBottom={{ base: "1px solid", md: "none" }}
        borderRight={{ md: "1px solid" }}
        borderColor="brand.borderGrey"
        _checked={{
          bg: "brand.blueCta",
          color: "white",
          mx: "-1px",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}
export default RadioCard;
