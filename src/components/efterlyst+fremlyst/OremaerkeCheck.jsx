import { Checkbox, Text, Flex } from "@chakra-ui/react";

function OremaerkeCheck({ maerket, setMaerket }) {
  return (
    <Flex minW={"8rem"} alignItems={"center"}>
      <Checkbox
        colorScheme="blueKv"
        _focus={{ boxShadow: "none" }}
        onChange={() => {
          if (maerket === false) {
            setMaerket(true);
          } else {
            setMaerket(false);
          }
        }}
      >
        <Text fontSize={"xxs"}>Er øremærket</Text>
      </Checkbox>
    </Flex>
  );
}

export default OremaerkeCheck;
