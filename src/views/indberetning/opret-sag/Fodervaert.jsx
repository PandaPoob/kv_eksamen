import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Fodervaert() {
  return (
    <Box
      p="2rem"
      mt="4rem"
      bg="brand.white"
      borderRadius="0.2rem"
      boxShadow="md"
      maxW={{ lg: "container.sm" }}
    >
      <Heading as="h2" size="heading4" mb="1rem">
        Vil du blive fodervært?
      </Heading>
      <Text>
        Hvis katten viser sig at være tam og ingen ejer melder sig efter 5 dages
        fremlysning, vil Kattens Værn finde et nyt godt hjem til den via vores
        internater. <br /> <br /> Men hvis katten viser sig at være en oprigtig
        vild kat og ikke er for syg eller er tilskadekommen kan den blive
        genudsat. Dette kræver dog en fodervært, da katte ikke kan klare sig
        selv i den danske natur. En foderværts ansvar vil være at sørge for mad,
        vand og læ. Vores genudsætningsprogram er den eneste velfungerende
        løsning for de vilde katte i Danmark, og derfor anbefaler vi stærkt at
        overveje det.
      </Text>
      <NextLink
        href={`/indberetning/bliv-fodervaert`}
        passHref
        prefetch={false}
      >
        <Link
          variant={"blueBtn"}
          textAlign={"center"}
          mt={"1.5rem"}
          justifyContent="center"
        >
          Læs mere
        </Link>
      </NextLink>
    </Box>
  );
}

export default Fodervaert;
