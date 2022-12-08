import React from 'react'
import { Box, Text, Heading, List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { BsHeart } from "react-icons/bs";


export default function Liste() {

    const listeData = [
      {
        nr: 1,
        titel: "At vilde og herreløse katte bliver fundet af vores katteinspektører",
        tekst: "Hver gang vores inspektører kører ud, er det din støtte, der gør det muligt. Hverken kommuneaftaler eller de private udgifter til indfangning, dækker de reelle udgifter, som vi har.",
      },
      {
        nr: 2,
        titel: "At vi kan huse og socialisere de indfangede katte inden de får nyt hjem",
        tekst: "Vores internater og inspektørtjeneste udgør tilsammen rundt regnet 70 procent af vores samlede udgifter. Det er det direkte arbejde med kattene, der koster.",
      },
      {
        nr: 3,
        titel: "At vores katte får et grundigt sundhedstjek og behandling",
        tekst:
          "Vores katteklinikker og de dygtige veterinærsygeplejersker og dyrelæger er værd at bruge ressourcer på, da de er afgørende for kattens ve og vel, og deres mulighed for at få et bedre liv, end det de reddes fra.",
      },
      {
        nr: 4,
        titel: "At vilde katte kan genudsættes i deres territorium",
        tekst: "Selvom ikke alle katte kan fungere i et hjem med mennesker, skal de ikke nedprioriteres! Vi vælger stadig at bruge tid og ressourcer på de katte, som efter sundhedshjælp og evt. behandling, kan få et godt liv som vildkat.",
      },
    ];
  return (
    <Box px="1rem" py={{ base: "3rem", md: "6rem" }}>
      <List display={"grid"} alignItems="baseline" gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={"3rem"} maxW="container.xl" m={"auto"}>
        {listeData.map((l) => (
          <ListItem key={l.nr}>
            <Flex alignItems={"center"} gap="1rem">
              <ListIcon as={BsHeart} color="brand.redCta" fontSize={30} />
              <Heading as="h2" size="heading4" mb="1rem">
                {l.titel}
              </Heading>
            </Flex>
            <Text ml="3.5rem">{l.tekst}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
