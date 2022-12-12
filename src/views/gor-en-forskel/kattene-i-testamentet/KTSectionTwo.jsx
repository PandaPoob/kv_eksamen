import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

export default function KTSectionTwo() {
  return (
    <Box bg="brand.lightGrey" display={"grid"} placeContent="center" px="1rem" py={{base: "3rem", md: "6rem"}}>
      <Box maxW="container.md" display={"grid"} gap="1.5rem">
        <Heading as="h2" size="heading3">Bliv fritaget for arveafgift</Heading>
        <Text>
          Kattens Værn er som velgørenhedsorganisation fritaget for at betale afgift. Det betyder, at al arv som doneres til foreningen, går ubeskåret til vores arbejde med vilde og herreløse katte i Danmark. Hvis du i
          din arv ønsker at tilgodese for eksempel en nevø eller en niece, kan testamentet sammenfattes, så det bliver Kattens Værn, der betaler størstedelen af boafgiften. Via denne model, får arvingerne en større glæde
          af deres arveandel og kattene bliver stadig tilgodeset.
        </Text>
        <Text>
          Én ting er sikker – har du ingen familie og har du ikke tegnet et testamente der beskriver, hvad der skal ske med din arv, tilfalder pengene fra dit bo statskassen. Et eksempel på, hvordan du får mere ud af din
          arv:
        </Text>
      </Box>
    </Box>
  );
}
