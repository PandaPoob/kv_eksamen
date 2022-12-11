import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import { Text, Heading, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";

function IndleveringAfKat({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader
        imgMobPos={"35%"}
        h1mobsize={"heading2"}
        height={"75vh"}
        {...sideData}
      />
      <Box display="grid" justifyContent="center" my="6rem" px="1rem">
        <Heading as="h2" size="heading2" mb="1rem">
          Indlever din kat hos Kattens Værn
        </Heading>
        <Text maxW="70ch" ml={{ lg: "0.5rem" }}>
          Hvis du ikke længere kan beholde din private kat mere på grund af
          f.eks. allergi, sygdom eller andet, kan det være vi kan tage imod den
          så den kan finde et nyt hjem. Dog er Kattens Værns primære fokus de
          vildtlevende katte og det betyder at vi ikke altid kan tage imod
          private katte, hvis vores internater allerede er fyldt op. <br />
          <br />
          Om vi har plads eller ej er det individuelle internats beslutning og
          derfor anbefaler vi at du kontakter det internat, du har tænkt dig at
          indlevere din kat til.
        </Text>
        <NextLink href={`/om-os/internater`} passHref>
          <Link
            justifySelf="center"
            variant={"blueBtn"}
            textAlign={"center"}
            py="0.5rem"
            justifyContent={"center"}
            mt={"2rem"}
            width="170px"
          >
            Se internaterne
          </Link>
        </NextLink>
      </Box>
    </PageLayout>
  );
}

export default IndleveringAfKat;
