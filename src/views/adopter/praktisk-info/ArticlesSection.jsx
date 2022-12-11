import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Carousel from "../../../components/features/Carousel";
import InfoArtikel from "../../../components/articles/InfoArtikel";

export default function ArticlesSection({ articleData }) {
  return (
    <Box
      as="section"
      bgColor={"brand.darkGrey"}
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
    >
      <Heading
        as="h2"
        size={"heading2"}
        textAlign="center"
        color="white"
        mb="1rem"
      >
        Godt at vide hvis du skal adoptere
      </Heading>
      <Text pb={"3rem"} maxW="container.md" m="auto" color="brand.white">
        Først og fremmest skal du tænke over, om du er klar til at engagere dig
        i en kat, der kan blive helt op til 20 år gammel, hvis du får en
        killing. Dernæst skal du tænke på, om din bolig er et passende sted at
        have kat, om du er nok hjemme til at aktivere og kæle med katten hver
        dag og om du har den fornødne økonomi til foder, dyrlægeregninger,
        forsikringer mm.
      </Text>
      <Box display="grid" justifyContent="center">
        <Box
          py={"1rem"}
          overflow="hidden"
          maxW={{ base: "20rem", md: "43rem", lbp: "63rem", xxl: "84rem" }}
        >
          <Carousel
            listData={articleData}
            CarouselListItem={InfoArtikel}
            perPage={{ base: 1, md: 2, lbp: 3, xxl: 4 }}
            perMoveVal={{ base: 1, lbp: 1, xl: 1 }}
            customP={{ left: 0, right: 0 }}
            pos={"center"}
            arrowColor={"brand.white"}
          />
        </Box>
      </Box>
    </Box>
  );
}
