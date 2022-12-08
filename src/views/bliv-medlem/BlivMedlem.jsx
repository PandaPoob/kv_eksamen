import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import NextLink from "next/link";

export default function BlivMedlem({ sideData }) {
  const textArr = [
    "10% rabat på ydelser og produkter (ikke medicin) hos  katteklinikken i Brøndby.",
    "10% rabat på din kats forsikring hos Dyrekassen Danmark.",
    "10% på foder og katteartikler hos Kattens Værns internater i Brøndby og Aalborg.",
    "Vores blad Kattens Venner tilsendes fire gange om året.",
  ];
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} imgMobPos={"30%"} />
      <Box py="6rem" px="1rem">
        <Box
          display={"grid"}
          gap="3rem"
          placeContent="center"
          bg={"brand.white"}
          boxShadow="md"
          maxW={"container.md"}
          p="2rem"
          m="auto"
        >
          <Heading as="h2" size="heading3">
            For 240kr om året får du...
          </Heading>
          <List display={"grid"} gap="2rem">
            {textArr.map((t, i) => (
              <ListItem key={i}>
                <ListIcon as={ImDiamonds} color="brand.redCta" />
                {t}
              </ListItem>
            ))}
          </List>
          <NextLink href={""} passHref>
            <Link
              variant="redBtn"
              justifyContent={"center"}
              width="14rem"
              m="auto"
            >
              Bliv medlem nu
            </Link>
          </NextLink>
          <Text as={"i"} fontSize="smaller">
            Medlemskontingentet kan ikke trækkes fra i Skat, men al yderligere
            støtte op til 17.000 kroner årligt, er fradragsberettiget.
          </Text>
        </Box>
      </Box>
    </PageLayout>
  );
}
