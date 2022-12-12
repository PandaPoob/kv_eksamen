import React from "react";
import { Box, Link, Text, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SArticle({ titel, tekst, url, knaptekst, index }) {
  return (
    <Box as="article" display={"grid"} gap="1rem" bg={"brand.white"} p="2rem" boxShadow={"1px 1px 6px 1px #b8b8b8"} width="22rem" height="18rem">
      <Heading as="h3" size="heading4">
        {titel}
      </Heading>
      <Text>{tekst}</Text>
      <NextLink href={url} passHref>
        {index < 3 ? (
          <Link variant="redBtn" justifyContent={"center"}>
            {knaptekst}
          </Link>
        ) : (
          <Link variant="blueBtn" justifyContent={"center"}>
            {knaptekst}
          </Link>
        )}
      </NextLink>
    </Box>
  );
}
