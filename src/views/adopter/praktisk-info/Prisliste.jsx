import React from 'react'
import { Box, Heading, Text, Flex, Link, Divider, List, ListItem, ListIcon } from '@chakra-ui/react'
import NextLink from "next/link"
import { ImDiamonds } from "react-icons/im";

export default function Prisliste() {
    const textArr = [
      "Dyrlægeeftersyn",
      "Neutralisering (kastrering/sterilisering)",
      "Vaccination",
      "Øremærkning og chipning",
      "Registrering i Det Danske Katteregister",
      "Behandling for orm og lopper",
      "En måneds gratis forsikring hos Dyrekassen Danmark.",
      "Øremærkning og chipning",
    ];

  return (
    <Box maxW={"container.md"} m="auto" px="1rem" py={{ base: "3rem", md: "6rem" }} display="grid" gap="1rem">
      <Flex bg="brand.lightGrey" flexWrap={"wrap"} gap="1rem" justifyContent={"space-between"} p="2rem" borderRadius={"0.3rem"}>
        <Heading as="h2" size={{ base: "heading3", md: "heading2" }}>
          Adoptionspris:
        </Heading>
        <Heading color="brand.redCta" as="h2" size={{ base: "heading3", md: "heading2" }}>
          1095 DKK
        </Heading>
      </Flex>
      <Box bg="brand.lightGrey" px={{base: "2rem", md:"4rem"}} py={{base: "2rem", md: "4rem"}} display={"grid"} gap="2rem">
        <Heading as="h3" size={{base: "heading4", md: "heading3"}}>Prisen dækker over</Heading>
        <Divider borderColor={"brand.borderGrey"}></Divider>
        <List display={"grid"} gap="1rem">
            {textArr.map((l)=> (
                <ListItem key={l} display="flex" fontWeight={"bold"} alignItems="center" gap="1rem">
                    <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                    {l}
                </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}
