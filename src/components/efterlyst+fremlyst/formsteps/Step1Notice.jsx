import { useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from "@chakra-ui/react";

function Step1Notice() {
  return (
    <Box
      bg={"brand.white"}
      p="2rem"
      boxShadow={"md"}
      gridColumn={{ lg: "2/3" }}
    >
      <Accordion allowToggle maxW={"70ch"}>
        <AccordionItem>
          <AccordionButton>
            Gode råd
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <Heading as={"h3"} size="heading4">
              Billeder
            </Heading>
            <Text>
              Nu bedre billede desto større chance er der for, at nogen
              genkender katten. Så for at øge dine chancer råder vi til at
              uploade et klart billede hvor man kan se hele katten. Sørg for at
              så meget af katten er synlig på billede. Hvis muligt så sørg også
              for at billedet er god kvalitet og ikke sløret.
            </Text>
            <Heading as={"h3"} size="heading4">
              Beskrivelser
            </Heading>
            <Text>
              Vi råder også til at give en god beskrivelse af kattens udseende,
              da dette også øger chancen for at katten bliver genkendt. Både
              pelstype, pelsfarve, øjenfarve mm. kan være afgørende. Tænk også
              over unikke træk i forhold udseende. Unikke træk kan også være
              opførsel men vær opmærksom på, at disse ikke altid er relevante
              eller hjælpsomme da katten kan være skræmt og i uvant territorium
              hvilket vil sige dens adfærd kan være anerledes.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Step1Notice;
