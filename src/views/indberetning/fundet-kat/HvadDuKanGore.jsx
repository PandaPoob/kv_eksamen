import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { ImDiamonds } from "react-icons/im";

function HvadDuKanGore() {
  return (
    <Box as="section" display={"grid"} justifyContent="center">
      <Flex
        gap={"2rem"}
        maxW="container.xxl"
        py="4rem"
        px={"1rem"}
        flexWrap="wrap"
        justifyContent={"center"}
        flexDir={{ base: "column", lg: "row-reverse" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Box>
          <Accordion
            maxW="28rem"
            display={"grid"}
            allowToggle
            bg={"brand.white"}
            color="brand.blue"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            borderRadius="0.2rem"
          >
            <AccordionItem>
              <AccordionButton
                borderTopRadius="0.2rem"
                justifyContent={"space-between"}
                fontSize={"smallH"}
                bg={"brand.darkGrey"}
                color="brand.white"
                px="1.5rem"
                py="1.2rem"
                _hover={{ bg: "brand.blue" }}
                _focus={{ bg: "brand.blue" }}
              >
                Find øremærket
                <AccordionIcon
                  as={BsChevronDown}
                  color="brand.white"
                  w={6}
                  h={6}
                />
              </AccordionButton>

              <AccordionPanel p="2rem">
                <Text maxW="70ch">
                  Øremærket burde du kunne se med det blotte øje og består
                  typisk af tre bogstaver og tre tal.
                  <br /> <br />
                  Hvis der er et øremærke, men du har svært ved at tyde det, kan
                  du prøve at smøre lidt fedtstof som smør, madolie eller
                  læbepomade i øret på katten. Det burde få tatoveringen til at
                  træde tydeligere frem. Hvis tatoveringen er lavet korrekt vil
                  den være vendt modsat i hvert øre. Det vil sige, at det, der
                  kan være svært at tyde i det ene øre, sandsynligvis er bevaret
                  i det andet. Du kan også prøve at slukke lyset og lyse igennem
                  kattens øre, fra bagsiden, med en lommelygte, for at få
                  tatoveringen til at træde tydeligere frem.
                  <br />
                  <br />
                  <Text as="span" fontSize={"xxs"}>
                    *Hvis øremærket er usædvanligt er der højst sandsynligt tale
                    om en udenlandsk kat. I dette tilfælde kan du prøve at
                    tjekke om katten er efterlyst på Europetnet
                  </Text>
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion
            maxW="28rem"
            mt={{ base: "2rem" }}
            display={"grid"}
            allowToggle
            bg={"brand.white"}
            color="brand.blue"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            borderRadius="0.2rem"
          >
            <AccordionItem>
              <AccordionButton
                borderTopRadius="0.2rem"
                justifyContent={"space-between"}
                fontSize={"smallH"}
                bg={"brand.darkGrey"}
                color="brand.white"
                px="1.5rem"
                py="1.2rem"
                _hover={{ bg: "brand.blue" }}
                _focus={{ bg: "brand.blue" }}
              >
                Find chipnummeret
                <AccordionIcon
                  as={BsChevronDown}
                  color="brand.white"
                  w={6}
                  h={6}
                />
              </AccordionButton>

              <AccordionPanel p="2rem">
                <Text maxW="70ch">
                  For at se chipnummeret skal du have katten til en dyrlæge for
                  at tjekke, om den er chippet. (Hvis du ringer i forvejen, vil
                  dyrlæger for det meste tjekke katten med en chipscanner uden
                  omkostninger for dig). <br />
                  Et chipnummer består af 15 cifre, og i Danmark begynder
                  chipnummeret med 208.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box mt={{ base: "2rem", lg: "0" }}>
          <Box
            bg="brand.white"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            py={{ base: "2rem", lg: "3rem" }}
            px={{ base: "2rem", lg: "4rem" }}
            maxW="45rem"
          >
            <Heading as="h3" size="heading4" mb={"2rem"}>
              Hvis katten er tam og har mærke/chip
            </Heading>
            <Divider orientation="horizontal" mb="2rem" />
            <List display={"grid"} gap="1.5rem">
              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Kontakt Det Danske Katteregister på tlf. 70 27 04 47 eller på{" "}
                  <NextLink href="https://www.katteregister.dk/" passHref>
                    <Link isExternal variant="exLink">
                      www.katteregister.dk
                    </Link>
                  </NextLink>
                  , da de kan hjælpe med at identificere ejer.{" "}
                </Text>
              </ListItem>

              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Hvis katten ikke findes i Det Danske Katteregister, kan man
                  prøve hos{" "}
                  <NextLink href="https://www.dansk-katteregister.dk/" passHref>
                    <Link isExternal variant="exLink">
                      {" "}
                      Dansk Katteregister
                    </Link>
                  </NextLink>
                  .
                </Text>
              </ListItem>
              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Du kan også tage katten til nærmeste dyrelæge som også kan
                  hjælpe med at kontakte ejer.
                </Text>
              </ListItem>
            </List>
            <Text mt={"2rem"} fontSize={"xxs"} maxW="75ch">
              Kattens Værn tager som udgangspunkt ikke chippede eller mærkede
              katte ind, da vores arbejde primært fokuserer på de herreløse
              katte, og mærket/chippen betyder at de har en registreret ejer.
            </Text>
          </Box>

          <Box
            bg="brand.white"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            py={{ base: "2rem", lg: "3rem" }}
            px={{ base: "2rem", lg: "4rem" }}
            maxW="45rem"
            mt="4rem"
          >
            <Heading as="h3" size="heading4" mb={"2rem"}>
              Hvis katten er tam men ikke har mærke
            </Heading>
            <Divider orientation="horizontal" mb="2rem" />
            <List display={"grid"} gap="1.5rem">
              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Tjek om katten er efterlyst hos os{" "}
                  <NextLink href="/efterlysning/efterlyste-katte" passHref>
                    <Link variant="inLink">her</Link>
                  </NextLink>
                  .
                </Text>
              </ListItem>

              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Hvis du ikke fandt en efterlysning der matchede den kat du har
                  fundet så overvej at lave en fremlysning hos os{" "}
                  <NextLink href="/indberetning/fremlys-kat" passHref>
                    <Link variant="inLink">her</Link>
                  </NextLink>
                  .
                </Text>
              </ListItem>

              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Hæng opslag op i området, hvor du spørger om nogen kender
                  katten. Hør eventuelt også dine naboer om der er nogen der
                  genkender den.
                </Text>
              </ListItem>
              <ListItem display={"flex"} alignItems="center" maxW="70ch">
                <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
                <Text>
                  Brug internettet til at fremlyse katten. Bl.a. i diverse
                  Facebook eller hjemmesider som{" "}
                  <NextLink href="https://kattegale.dk/" passHref>
                    <Link isExternal variant="exLink">
                      kattegale.dk
                    </Link>
                  </NextLink>
                  , eller på{" "}
                  <NextLink
                    href="https://www.dyrenesbeskyttelse.dk/efterlyste-dyr"
                    passHref
                  >
                    <Link isExternal variant="exLink">
                      Dyrenes beskyttelse
                    </Link>
                  </NextLink>
                </Text>
              </ListItem>
            </List>
            <Text mt={"2rem"} fontSize={"xxs"} maxW="75ch">
              Hvis ingen reagerer, kan du vælge at tage katten til dig, eller du
              kan forhøre dig ad, om der er plads på et af vores eller andre
              dyreværnsorganisationers internater. Du kan også selv forsøge at
              finde et nyt hjem til den. <br />
              <br /> Du bør først tage katten til dig, når du har forsøgt at
              finde dens retmæssige ejer. Hvis det var din kat, der var løbet
              væk, ville du sandsynligvis også sætte pris på, at der blev gjort
              en indsats for at forene dig med din kat, inden den fik lov til at
              blive. De fleste internater og dyrlæger går efter
              tommelfingerreglen om, at man fremlyser alt hvad man kan i minimum
              én uge, før man må overtage katten eller overdrage den til andre.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default HvadDuKanGore;
