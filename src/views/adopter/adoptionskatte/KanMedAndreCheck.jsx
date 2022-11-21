import { Checkbox, Text, Flex } from "@chakra-ui/react";

function KanMedAndreCheck({ kanMedAndre, setKanMedAndre }) {
  return (
    <Flex mr={"4rem"} minW={"12rem"} alignItems={"center"}>
      <Checkbox
        colorScheme="blueKv"
        _focus={{ boxShadow: "none" }}
        onChange={() => {
          if (kanMedAndre === false) {
            setKanMedAndre(true);
          } else {
            setKanMedAndre(false);
          }
        }}
      >
        <Text fontSize={"xxs"}>Kan med andre katte</Text>
      </Checkbox>
    </Flex>
  );
}

export default KanMedAndreCheck;
