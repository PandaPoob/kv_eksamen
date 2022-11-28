import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";

export default function SponsorArticle({ acf }) {
  return (
    <Box
      bgColor={"brand.white"}
      borderRadius="5px"
      minW="23rem"
      maxW="25rem"
      minH="31rem"
      maxH="38rem"
      color="brand.darkGrey"
    >
      <Flex
        position={"relative"}
        my={"auto"}
        justify={"center"}
        mt={"1.75rem"}
        pr={"4.3rem"}
        pl={"4.3rem"}
      >
        <Image
          borderTopRadius={"5px"}
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

      <Text mt={"2rem"} width={"18.75rem"} mr={"auto"} ml={"auto"} mb="2rem">
        {acf.tekst}
      </Text>
    </Box>
  );
}
