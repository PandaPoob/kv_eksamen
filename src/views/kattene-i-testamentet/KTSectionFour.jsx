import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
export default function KTSectionFour({ acf }) {
  return (
    <Box bg="brand.lightGrey" px="1rem" py={{ base: "3rem", md: "6rem" }}>
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: "2rem", lg: "4rem" }}
        maxW="container.xl"
        m="auto"
      >
        <Box position={"relative"} minh="20rem" width={"100%"}>
          <Image
            src={acf.img3}
            alt="god morgen danmark"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box>
          <Heading as="h3" size={"heading4"} mb="1rem">
            Veterinærsygeplejerske Karina Dillon skriver Kattens Værn i
            testamentet
          </Heading>
          <Text>
            Veterinærsygeplejerske Karina Dillon fortæller i Go’ Morgen Danmark
            om at hun har testamenteret sine penge til Kattens Værn og om de
            overvejelser i forbindelse hermed.{" "}
          </Text>
          <Text mt={"1rem"}>
            {" "}
            <NextLink
              href={
                "https://nyheder.tv2.dk/2021-03-15-48-aarig-vil-efterlade-sin-arv-til-katte-og-hun-er-ikke-den-eneste-0"
              }
              passHref
            >
              <Link
                variant="exLink"
                maxW={"14rem"}
                justifyContent="center"
                mt="2rem"
                isExternal
              >
                Se afsnittet her
              </Link>
            </NextLink>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
