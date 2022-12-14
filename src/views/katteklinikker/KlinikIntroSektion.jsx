import { Box, Text, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function KlinikIntroSektion({ acf }) {
  return (
    <Box
      as="section"
      display={"grid"}
      placeContent="center"
      my={{ base: "3rem", lg: "6rem" }}
      mx="1rem"
    >
      <Box
        maxW={{base:"70ch", lg:"container.xl"}}
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: "3rem", lg: "6rem" }}
      >
        <Box position={"relative"} minH="20rem" width="100%">
          <Image
            src={acf.introsektion.artikelbillede}
            alt="katteklinik"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Heading as="h2" size="heading2">
            {acf.introsektion.overskrift}
          </Heading>
          <Text>{acf.introsektion.brodtekst}</Text>
          <NextLink href={acf.introsektion.knap_link} passHref prefetch={false}>
            <Link
              variant={"blueBtn"}
              w="12rem"
              mt="3rem"
              justifyContent={"center"}
              mx={{base: "auto", md: "0"}}
            >
              {acf.introsektion.knap_tekst}
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
}
