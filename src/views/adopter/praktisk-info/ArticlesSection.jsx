import React from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import Carousel from '../../../components/features/Carousel';
import InfoArtikel from '../../../components/articles/InfoArtikel';


export default function ArticlesSection({articleData}) {
  return (
    <Box as="section" bgColor={"brand.darkGrey"} py={{ base: "3rem", lg: "6rem" }} px="1rem">
      <Heading as="h2" size={"heading2"} textAlign="center" color="white" mb="1rem">
        Godt at vide hvis du skal adoptere
      </Heading>
      <Text pb={"3rem"} maxW="container.md" m="auto" color="brand.white">
        Først og fremmest skal du tænke over, om du er klar til at engagere dig i en kat, der kan blive helt op til 20 år gammel, hvis du får en killing. Dernæst skal du tænke på, om din bolig er et passende sted at have
        kat, om du er nok hjemme til at aktivere og kæle med katten hver dag og om du har den fornødne økonomi til foder, dyrlægeregninger, forsikringer mm.
      </Text>
      <Carousel CarouselListItem={InfoArtikel} listData={articleData} perPage={{ base: 1, md: 2, lg: 3 }} perMoveVal={{ base: 1, md: 2, lg: 3 }} pos="center" customP={{ left: 0, right: "2rem" }} />
    </Box>
  );
}
