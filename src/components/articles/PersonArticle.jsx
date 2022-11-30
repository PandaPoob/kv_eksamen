import { Box, Heading, Text, Icon, Flex } from "@chakra-ui/react";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";

function PersonArticle({ acf, boxshadow }) {
  return (
    <Box
      as="article"
      height={"20rem"}
      width={"20rem"}
      bgColor="white"
      marginBlock={"1rem"}
      boxShadow={boxshadow}
      color={"brand.blue"}
      borderRadius="0.3rem"
      overflow={"hidden"}
    >
      <Box
        position="relative"
        minH={"10rem"}
        width={"100%"}
        filter="grayscale(100%)"
      >
        {" "}
        <Image
          src={acf.billede}
          alt={acf.navn}
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box mx={"1rem"} pt="0.8rem">
        <Heading as="h3" size={"heading4"} pt="0.5rem">
          {acf.navn}
        </Heading>
        <Text>{acf.stilling}</Text>
        {acf.email === undefined ? null : (
          <Flex alignItems={"center"} gap={"0.5rem"} pt="0.5rem">
            <Icon as={BsEnvelope} width="1rem" height="1rem"></Icon>
            <Text>{acf.email}</Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default PersonArticle;
