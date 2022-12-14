import React from "react";
import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function HighlightSektion({ acf }) {
  const a = acf.highlight;
  return (
    <Box
      position="relative"
      display={"grid"}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="repeat(3, 1fr)"
      height={"60vh"}
      width={"100vw"}
      overflow="hidden"
      backgroundImage={a.baggrundsbillede}
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
        gridColumn={{ base: "1/3", lg: "2/3" }}
        zIndex={"1"}
        align={"left"}
        justifyContent="center"
        direction={"column"}
        color="brand.white"
        gap="1rem"
        py={"2rem"}
        px="2rem"
      >
        <Heading as={"h3"} size="heading4">
          {a.overskrift}
        </Heading>
        <NextLink href={a.knaplink} passHref prefetch={false}>
          <Link
            variant={"redBtn"}
            width="12rem"
            mx="auto"
            mt="3rem"
            justifyContent={"center"}
          >
            {a.knaptekst}
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}
