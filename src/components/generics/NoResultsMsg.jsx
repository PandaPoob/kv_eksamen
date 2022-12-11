import { Flex, Text, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { MdSearchOff } from "react-icons/md";

function NoResultsMsg({ msg }) {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Icon as={MdSearchOff} h="6rem" w="6rem" color="brand.darkGrey" />
      <Text>{msg}</Text>
    </Flex>
  );
}

export default NoResultsMsg;
