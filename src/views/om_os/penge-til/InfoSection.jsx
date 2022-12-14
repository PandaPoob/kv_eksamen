import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
export default function InfoSection({ acf }) {
  return (
    <Box
      as="section"
      bg="brand.lightGrey"
      px="1rem"
      py={{ base: "3rem", lg: "6rem" }}
      display={"grid"}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        maxW="container.xl"
        m="auto"
        gap={{ base: "2rem", lg: "4rem" }}
      >
        <Box display={"grid"} gap="2rem">
          <Heading as="h3" size="heading3">
            Dine penge gør en forskel
          </Heading>
          <Text>
            Når du støtter Kattens Værn, går så meget som muligt af din støtte
            direkte til kattene. Vores internater og inspektørtjeneste udgør
            tilsammen rundt regnet 70 procent af vores samlede udgifter. Det er
            det direkte arbejde med kattene, der koster. Hver gang vores
            inspektører kører ud, er det din støtte, der gør det muligt. Hverken
            kommuneaftaler eller de private udgifter til indfangning, dækker de
            reelle udgifter, som vi har. Hver kat, der får nyt hjem gennem vores
            internater, koster rundt regnet 2000 kroner. Og det er, når
            adoptionsudgiften er trukket fra. Uden din ekstra hjælp, ville vi
            ikke kunne hjælpe hverken de tamme eller vilde katte. Så vi er meget
            taknemmelige for, at du har valgt at støtte os. For en mere
            detaljeret beskrivelse af, hvordan pengene bruges og hvordan
            økonomien ser ud, kan du se de seneste års regnskaber{" "}
            <NextLink href="/dokumenter-og-foldere" passHref prefetch={false}>
              <Link variant="inLink">her.</Link>
            </NextLink>
          </Text>
          <Text>
            Vil du også støtte vores arbejde og på samme tid være med til at
            gøre en forskel for kattene?{" "}
          </Text>
          <NextLink href="/stottemuligheder" passHref prefetch={false}>
            <Link variant="redBtn" maxW={"14rem"} justifyContent="center">
              Se støttemuligheder
            </Link>
          </NextLink>
        </Box>
        <Box position={"relative"} minH="22rem" width={"100%"}>
          <Image
            src={acf.img1}
            alt="Gør en forskel"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
}
