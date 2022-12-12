import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";

export default function SponsorArticleA({ acf }) {
  return (
    <Box
      bgColor={"brand.white"}
      /*  minW="23rem" */
      minW={{ base: "18.75rem", md: "20rem" }}
      maxW={{ base: "23.1rem", md: "22rem", lg: "23.1rem" }}
      minH="31rem"
      maxH="38rem"
      color="brand.darkGrey"
      borderRadius={"0.2rem"}
      boxShadow="md"
    >
      <Flex
        borderTopRadius={"5px"}
        position={"relative"}
        my={"auto"}
        justify={"center"}
        mt={"1.75rem"}
        px={"4.3rem"}
      >
        <Image
          alt="billede af sponsor logo"
          src={acf.billede}
          width={"326px"}
          height={"123px"}
        />
      </Flex>

      <Divider
        borderWidth={"1px"}
        mt={"2rem"}
        width="80%"
        mr="auto"
        ml="auto"
      />

      <Text mt={"2.1rem"} width={"18.75rem"} mr={"auto"} ml={"auto"} mb="2rem">
        {acf.tekst}
      </Text>
    </Box>
  );
}
