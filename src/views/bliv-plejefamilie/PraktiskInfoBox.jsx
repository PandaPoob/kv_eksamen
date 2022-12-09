import React from "react";
import { Box, Heading, Flex, Text, Divider } from "@chakra-ui/react";

export default function PraktiskInfoBox() {
  return (
    <Box
      display={"grid"}
      alignContent="center"
      gap="1rem"
      bg={"brand.white"}
      borderRadius="0.3rem"
      boxShadow={"1px 2px 6px 1px #B8B8B8"}
      maxH={{ md: "70%" }}
      p={{ base: "2rem", lg: "3rem" }}
    >
      <Heading as="h2" size="heading4">
        De ting du skal bruge
      </Heading>
      <Divider borderColor={"brand.borderGrey"} />
      <Text>
        Alt hvad kattene har brug for i plejeperioden såsom foder, kattegrus,
        kattebakke, mm. får du udleveret til brug i hele plejeperioden.
        Ligeledes sørger Kattens Værns dygtige personale for, at vejlede dig og
        stå klar med sparring i plejeperioden, så du er bedst muligt klædt på
        til opgaven.
      </Text>
    </Box>
  );
}
