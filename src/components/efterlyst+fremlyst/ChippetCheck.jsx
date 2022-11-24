import { Checkbox, Text, Flex } from "@chakra-ui/react";

function ChippetCheck({ chippet, setChippet }) {
  return (
    <Flex minW={"8rem"} alignItems={"center"}>
      <Checkbox
        colorScheme="blueKv"
        _focus={{ boxShadow: "none" }}
        onChange={() => {
          if (chippet === false) {
            setChippet(true);
          } else {
            setChippet(false);
          }
        }}
      >
        <Text fontSize={"xxs"}>Er chippet</Text>
      </Checkbox>
    </Flex>
  );
}

export default ChippetCheck;
