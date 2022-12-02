import { Box, useCheckbox, Flex, Text } from "@chakra-ui/react";

function CustomCheck(props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

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
    /*     <Box
      as="label"
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="36"
      bg="green.50"
      border="1px solid"
      borderColor="green.500"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        {props.value}
      </Text>
    </Box> */
  );
}

export default CustomCheck;
