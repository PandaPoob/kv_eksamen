import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import FundetVildKat from "./FundetVildKat";
import IndfangningsPris from "./IndfangningPris";
import Fodervaert from "./Fodervaert";

function OpretSag({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"25%"} {...sideData} />

      <Box
        display="grid"
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        justifyContent="center"
        gap={{ lg: "2rem", xl: "4rem" }}
      >
        <Box mt="4rem" maxW="container.sm" mx="auto">
          <FundetVildKat />
          <IndfangningsPris />
        </Box>
        <Box
          bg="brand.lightGrey"
          px={{ base: "2rem", lg: "4rem" }}
          mt={{ base: "4rem", lg: "0" }}
          pb="4rem"
        >
          <Fodervaert />
        </Box>
      </Box>

      <Flex
        bg="brand.darkGrey"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        color="brand.white"
        px="1rem"
        py="4rem"
        borderBottom="1px solid"
        borderColor="brand.redCta"
        minH="40vh"
      >
        <Heading as="h2" size="heading4" mb="1rem">
          Vil du have din kommune med i ordningen?
        </Heading>
        <Text maxW="70ch">
          Ønsker man at gøre sine lokalpolitikere opmærksom på, at en aftale
          ønskes, kan man skrive til kommunen direkte eller via læserbreve i
          lokale medier. Man har også mulighed for at starte en
          underskriftsindsamling og vi har lavet et udkast til hvordan sådan en
          blanket kan se ud. Den kan downloades{" "}
          <NextLink
            prefetch={false}
            href={`https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/underskriftsindsamling.pdf`}
            passHref
          >
            <Link isExternal variant={"exLink"}>
              {" "}
              her
            </Link>
          </NextLink>
          , og kan bruges frit.
        </Text>
      </Flex>
    </PageLayout>
  );
}

export default OpretSag;
