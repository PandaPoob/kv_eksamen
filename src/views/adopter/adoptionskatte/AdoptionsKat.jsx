import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import Image from "next/image";
import PageLayout from "../../../components/layout/PageLayout";
import Carousel from "../../../components/features/Carousel";
import ContactBox from "./ContactBox";
import CarouselImage from "../../../components/generics/CarouselImage";

function AdoptionsKat({ katData }) {
  const {
    navn,
    tag,
    miljo,
    alder,
    kon,
    internat,
    kan_med_andre_katte,
    beskrivelse,
    billeder,
  } = katData.acf;

  //fix what wp couldnt
  const billedArr = Object.entries(billeder).map((e) => ({
    alt: e[0],
    url: e[1],
  }));

  //remove empty entries (false)
  const cleanbilledArr = billedArr.filter((b) => b.url !== false);

  return (
    <PageLayout>
      <Box display={"grid"} gridTemplateColumns={{ lg: "1fr 1fr" }}>
        <Box bg="brand.lightGrey" boxShadow="md" minHeight={{ lg: "100vh" }}>
          <Box
            maxW={{ base: "container.sm" }}
            m={"auto"}
            px={"1rem"}
            py={"4rem"}
          >
            <Heading as="h1" size="heading2">
              <Text as="span" color={"brand.grey"}>
                {tag}
              </Text>{" "}
              {navn}
            </Heading>

            {cleanbilledArr.length === 1 ? (
              cleanbilledArr.map((b) => (
                <Box
                  key={b.alt}
                  position="relative"
                  minH={"22rem"}
                  width={"100%"}
                >
                  <Image
                    src={b.url}
                    alt={b.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              ))
            ) : (
              <Carousel
                listData={cleanbilledArr}
                perPage={{ base: 1 }}
                perMoveVal={{ base: 1 }}
                CarouselListItem={CarouselImage}
                customP={{ left: 0, right: "2rem" }}
                pos={"center"}
              />
            )}

            <Box
              bg={"brand.darkGrey"}
              color="brand.white"
              px={{ base: "1rem", lg: "2rem" }}
              py="1.6rem"
            >
              <Flex justifyContent={"space-between"} mb="2rem">
                <Box
                  as="dl"
                  display="grid"
                  gridTemplateColumns={"repeat(2, 1fr)"}
                  columnGap={{ base: "1rem", md: "2rem" }}
                  rowGap={"1rem"}
                  fontSize={{ base: "xs", lg: "smallH" }}
                >
                  <Text as="dt" fontWeight={"light"}>
                    Miljø
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {miljo}
                  </Text>

                  <Text as="dt" fontWeight={"light"}>
                    Alder
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {alder}
                  </Text>
                </Box>

                <Box
                  as="dl"
                  display="grid"
                  gridTemplateColumns={"repeat(2, 1fr)"}
                  columnGap={{ base: "1rem", md: "2rem" }}
                  rowGap={"1rem"}
                  fontSize={{ base: "xs", lg: "smallH" }}
                >
                  <Text as="dt" fontWeight={"light"}>
                    Køn
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {kon}
                  </Text>

                  <Text as="dt" fontWeight={"light"}>
                    Internat
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {internat}
                  </Text>
                </Box>
              </Flex>
              <Flex
                as="dl"
                justifyContent={"space-between"}
                pt="1rem"
                fontSize={{ base: "xs", lg: "smallH" }}
              >
                <Text as="dt" fontWeight={"light"}>
                  Kan med andre katte?*
                </Text>
                <Text as="dd" fontWeight={"bold"}>
                  {kan_med_andre_katte}
                </Text>
              </Flex>
            </Box>
            <Text fontSize={"xxs"} fontWeight="light" mt={"0.5rem"}>
              *Vi kan aldrig garantere at en kat kan med andre men vi vurderer
              udfra om kattens har kunne omgås andre på internatet. Dog er der
              mange andre forhold der kan påvirke dette når man får katten med
              hjem.
            </Text>
          </Box>
        </Box>

        <Box
          maxW={{ base: "container.sm" }}
          m={"auto"}
          px={"1rem"}
          py={"4rem"}
          display="grid"
          gap={"2rem"}
        >
          <Box
            boxShadow="1px 2px 6px 1px #B8B8B8"
            bg={"brand.white"}
            p={"2rem"}
          >
            <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
              Beskrivelse
            </Heading>
            <Text>{beskrivelse}</Text>
          </Box>

          <Box
            boxShadow="1px 2px 6px 1px #B8B8B8"
            bg={"brand.white"}
            p={"2rem"}
          >
            <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
              Vil du møde {navn}?
            </Heading>
            <Text>
              Du kan ikke reservere en kat men du er altid velkommen til at
              ringe og få mere information eller aftale et møde med internatet
              så du kan hilse pa katten og se om det er det rigtige match. Se
              internatet her.
            </Text>
            <Divider orientation="horizontal" mt="1rem" />
            <ContactBox internat={internat}></ContactBox>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default AdoptionsKat;
