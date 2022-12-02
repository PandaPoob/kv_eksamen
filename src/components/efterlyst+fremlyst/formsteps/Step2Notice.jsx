import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Step2Notice() {
  return (
    <Box bg={"brand.white"} p="2rem" boxShadow={"md"}>
      <Heading as={"h3"} size="heading4">
        Billeder
      </Heading>
      <Text>
        Nu bedre billede desto større chance er der for, at nogen genkender
        katten. Så for at øge dine chancer råder vi til at uploade et klart
        billede hvor man kan se hele katten. Sørg for at så meget af katten er
        synlig på billede. Hvis muligt så sørg også for at billedet er god
        kvalitet og ikke sløret.
      </Text>
    </Box>
  );
}

export default Step2Notice;
