import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function VoresArbejde({ sideData }) {
  return (
    <PageLayout>
      <SplashHeader {...sideData}></SplashHeader>

      <Box
        // bgColor="brand.lightGrey"
        bgColor="lightyellow"
        display={"grid"}
        justifyContent={"center"}
        px="1rem"
        color={"brand.blue"}
      >
        <Heading as="h2" size={"heading2"} textAlign={"center"} pt="4rem">
          Indfangning og rehabilitering
        </Heading>
        <Text pt="1rem">
          Kattens Værns primære fokus er indfangning og rehabilitering af
          herreløse og vilde katte. Dette er en større process og vi har mange
          afdelinger og fagfolk som varetager byrden. Herreløse katte kan både
          være de vilde katte som aldrig er blevet mærket eller chippet men også
          de tamkatte som ingen ved kendes ved som er blevet efterladt eller
          glemt.
        </Text>
        <Box>
          <NextLink href={`/indberetning/fundet-kat`} passHref>
            <Link
              variant={"redBtn"}
              textAlign={"center"}
              py="1rem"
              justifyContent={"center"}
              mt={"1.5rem"}
              mb={"2rem"}
            >
              Har du fundet en kat?
            </Link>
          </NextLink>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default VoresArbejde;

// Link til artikel https://www.epaper.dk/dyrefondet/magasin/32/?fbclid=IwAR1CXJHaCsWansIPfxwa1qaKUyPzX3yPND4jppEScMKOc61a2DH-iRy3S7s
