import React from "react";
import { Box, Flex, Heading, Text, Link, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

export default function BlivArticle({ item }) {
  return (
    <Box
      bg={"brand.white"}
      minH="100%"
      borderRadius="0.3rem"
      boxShadow={"md"}
      p="2rem"
    >
      <Heading as={"h3"} size="heading4" mb="1rem">
        {item.overskrift}
        <Divider borderColor={"brand.borderGray"} mt="0.5rem" />
      </Heading>
      <Text>{item.brodtekst}</Text>
      <Flex
        justifyContent={"center"}
        gap="2rem"
        flexWrap={"wrap"}
        mt={{ base: "2rem", lg: "2rem" }}
      >
        {item.overskrift === "Bliv plejefamilie" ? (
          <NextLink
            href="/gor-en-forskel/bliv-plejefamilie"
            passHref
            prefetch={false}
          >
            <Link variant={"blueBtn"}>Læs mere</Link>
          </NextLink>
        ) : (
          <></>
        )}
        {item.status === "Ja" ? (
          <Link href="#kontaktos" variant={"redBtn"}>
            Kontakt os
          </Link>
        ) : (
          <></>
        )}
      </Flex>
    </Box>
  );
}
