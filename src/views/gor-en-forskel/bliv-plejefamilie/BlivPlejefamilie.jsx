import { Box, Heading, Text, Link } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import FaaSucessBox from "./FaaSucessBox";
import PraktiskInfoBox from "./PraktiskInfoBox";
import GodeRaad from "./GodeRaad";
import NextLink from "next/link";
import BilledBox from "./BilledBox";

export default function BlivPlejefamilie({ sideData, imgData }) {
  const acf = imgData.acf;
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} imgMobPos={"40%"} />
      <Box
        as="section"
        px="1rem"
        py={{ base: "3rem", lg: "6rem" }}
        display={"grid"}
        placeContent="center"
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          maxW="container.xl"
          gap={{ base: "2rem", lg: "4rem" }}
        >
          <FaaSucessBox />
          <PraktiskInfoBox />
        </Box>
      </Box>
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
          <GodeRaad />
          <BilledBox acf={acf} />
        </Box>
      </Box>
      <Box
        display={"grid"}
        placeContent="center"
        px="1rem"
        py={{ base: "3rem", lg: "6rem" }}
      >
        <Box maxW={"container.lg"} display="grid" gap="1rem">
          <Heading as="h3" size="heading3" textAlign={"center"}>
            Er du klar til at blive plejefamilie?
          </Heading>
          <Text textAlign={"center"} mb="2rem">
            Hvis du har lyst til at blive plejefamilie, så er du mere en
            velkommen til at kontakte det internat, som ligger nærmest dig til
            en uforpligtende snak.
          </Text>
          <NextLink href="/om-os/internater" passHref prefetch={false}>
            <Link
              variant="redBtn"
              width={"12rem"}
              m="auto"
              justifyContent={"center"}
            >
              Se internaterne
            </Link>
          </NextLink>
        </Box>
      </Box>
    </PageLayout>
  );
}
