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
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import GodkendtImg from "../../../assets/images/catimgright.webp";
import IkkeGodkendtImg from "../../../assets/images/catimgwrong.webp";
import GodkendtTxt from "../../../assets/images/cattxtright.webp";
import IkkeGodkendtTxt from "../../../assets/images/cattxtwrong.webp";

function Step1Notice() {
  return (
    <Box gridColumn={{ lg: "2/3" }}>
      <Accordion
        maxW={{ lg: "31.8rem" }}
        allowToggle
        defaultIndex={[0]}
        bg={"brand.white"}
        boxShadow={"md"}
        borderRadius={"0.2rem"}
      >
        <AccordionItem border={"none"}>
          <AccordionButton
            fontSize={"sm"}
            fontWeight="bold"
            p="2rem"
            justifyContent={"space-between"}
          >
            Gode råd
            <AccordionIcon as={BsChevronDown} color="brand.blue" w={6} h={6} />
          </AccordionButton>

          <AccordionPanel px="2rem">
            <Heading as={"h3"} size="heading5">
              Billeder
            </Heading>
            <Text maxW={"70ch"} mb="2rem">
              Nu bedre billede desto større chance er der for, at nogen
              genkender katten. Så for at øge dine chancer råder vi til at
              uploade et klart billede hvor man kan se hele katten. Sørg for at
              så meget af katten er synlig på billede. Hvis muligt så sørg også
              for at billedet er god kvalitet og ikke sløret.
            </Text>

            <Box
              display={"grid"}
              gridTemplateColumns={"59% 41%"}
              height={"100%"}
              gap={"1rem"}
              w={"100%"}
            >
              <Box
                position="relative"
                height={{ base: "8rem", img: "12rem", lg: "8rem", xl: "11rem" }}
              >
                <Image
                  src={GodkendtImg}
                  alt={"Eksempel på godt billede"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left top"
                />
              </Box>
              <Box
                position="relative"
                height={{ base: "8rem", img: "12rem", lg: "8rem", xl: "11rem" }}
              >
                <Image
                  src={IkkeGodkendtImg}
                  alt={"Eksempel på dårligt billede"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left top"
                />
              </Box>
            </Box>

            <Heading as={"h3"} size="heading5" mt="2rem">
              Beskrivelser
            </Heading>
            <Text maxW={"70ch"} mb="2rem">
              Vi råder også til at give en god beskrivelse af kattens udseende,
              da dette også øger chancen for at katten bliver genkendt. Både
              pelstype, pelsfarve, øjenfarve mm. kan være afgørende. Tænk også
              over unikke træk i forhold udseende. Unikke træk kan også være
              opførsel men vær opmærksom på, at disse ikke altid er relevante
              eller hjælpsomme da katten kan være skræmt og i uvant territorium
              hvilket vil sige dens adfærd kan være anerledes.
            </Text>
            <Box
              display={"grid"}
              gridTemplateColumns={{ md: "58% 42%" }}
              gap={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <Box position="relative" height={{ base: "16rem", md: "14rem" }}>
                <Image
                  src={GodkendtTxt}
                  alt={"Eksempel på en god beskrivelse"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left top"
                />
              </Box>
              <Box position="relative" height={{ base: "16rem", md: "14rem" }}>
                <Image
                  src={IkkeGodkendtTxt}
                  alt={"Eksempel på en dårlig beskrivelse"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left top"
                />
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Step1Notice;
