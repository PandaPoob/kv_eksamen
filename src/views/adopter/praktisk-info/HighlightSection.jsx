import React from "react";
import { Box, Link, Heading, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export default function HighlightSection({ acf }) {
  return (
    <Box
      position="relative"
      display={"grid"}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="repeat(3, 1fr)"
      height={"60vh"}
      width={"100vw"}
      overflow="hidden"
      backgroundImage={acf.img1}
      bgPosition={"center"}
      bgSize="cover"
    >
      <Box
        position="absolute"
        top={"0"}
        width="100%"
        height={"100%"}
        bgColor="brand.darkGrey"
        opacity={"50%"}
      ></Box>
      <Flex
        gridRow="2/3"
        gridColumn={{ base: "1/3", lg: "1/2" }}
        alignItems={{ base: "center", md: "left" }}
        zIndex={"1"}
        direction={"column"}
        color="brand.white"
        gap="1rem"
        py={"2rem"}
        px="3rem"
      >
        <Heading
          as={"h3"}
          size="heading3"
          textAlign={{ base: "center", md: "left" }}
        >
          Er du klar til at adoptere?
        </Heading>
        <NextLink href={"/adopter/adoptionskatte"} passHref prefetch={false}>
          <Link
            variant={"redBtn"}
            w="12rem"
            mt="1rem"
            justifyContent={"center"}
          >
            Se vores katte
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}
