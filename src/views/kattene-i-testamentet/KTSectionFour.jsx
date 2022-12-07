import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

export default function KTSectionFour() {
  return (
    <Box bg="brand.lightGrey" px="1rem" py={{ base: "3rem", md: "6rem" }}>
      <Box display={"grid"} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} maxW="container.xl" m="auto">
        <Box>Video</Box>
        <Box>
          <Heading as="h3" size={"heading4"} mb="1rem">
            Veterinærsygeplejerske Karina Dillon skriver Kattens Værn i testamentet
          </Heading>
          <Text>Veterinærsygeplejerske Karina Dillon fortæller i Go’ Morgen Danmark om at hun har testamenteret sine penge til Kattens Værn og om de overvejelser i forbindelse hermed.</Text>
        </Box>
      </Box>
    </Box>
  );
}
