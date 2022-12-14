import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";
import NextLink from "next/link";
export default function InfoBokse() {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ lg: "1fr 1fr" }}
      gap={{ base: "2rem", lg: "4rem" }}
      maxW="container.xl"
      m="auto"
      pb="6rem"
      px="1rem"
    >
      <Box
        bg="brand.lightGrey"
        p={"2rem"}
        display={"grid"}
        gap="2rem"
        borderRadius={"0.3rem"}
      >
        <Heading as="h3" size={{ base: "heading4", md: "heading4" }}>
          Royal Canin medlemsskab
        </Heading>
        <Text>
          Vi tilbyder også et medlemskab hos Royal Canin Klubben. Medlemsskabet
          er helt gratis og kan afmeldes, når som helst, man ønsker det.
        </Text>
        <Text>
          Når man adopterer en kat, får man udleveret en blanket med en kode på,
          som man selv skal registrere, når man kommer hjem. Efterfølgende
          tilsender Royal Canin 2 kg kattemad af den variant, som ens kat skal
          have, som gave, direkte hjem til din adresse.
        </Text>
        <Text>
          For hver tilmelding donerer Royal Canin også 25 kr. til Kattens Værns
          arbejde med Danmarks katte.
        </Text>
      </Box>
      <Box bg="brand.lightGrey" p="2rem" borderRadius={"0.3rem"}>
        <Heading as="h3" size={{ base: "heading4", md: "heading4" }} mb="2rem">
          Vær opmærksom på...
        </Heading>
        <List display={"grid"} gap="1.5rem">
          <ListItem display={"flex"} alignItems="center">
            <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
            <Text>
              At ingen af vores katte kan reserveres via mail eller pr. telefon,
              så hvis du falder for kat på vores hjemmeside, så kom ind og mød
              den på internatet i formidlingstiden eller efter aftale.
            </Text>
          </ListItem>
          <ListItem display={"flex"} alignItems="center">
            <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
            <Text>
              At ingen af vores katte kan forlade bygningen, uden at være i en
              transportkasse. Hvis du ikke selv har en med, kan der købes en på
              internatet.
            </Text>
          </ListItem>
          <ListItem display={"flex"} alignItems="center">
            <ListIcon as={ImDiamonds} color="brand.redCta"></ListIcon>
            <Text>
              Du kan købe alt nødvendigt tilbehør på vores internater eller på
              vores webshop som har udvalgte varer{" "}
              <NextLink
                href="https://kattens-vaern-butik.dk/"
                passHref
                prefetch={false}
              >
                <Link isExternal variant="exLink">
                  her
                </Link>
              </NextLink>{" "}
            </Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
