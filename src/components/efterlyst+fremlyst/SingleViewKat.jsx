import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import Image from "next/image";
import PageLayout from "../layout/PageLayout";
import ContactEF from "./ContactEF";
import { useState, useEffect } from "react";

function SingleViewKat({ EFdata, type }) {
  
  const {
    navn,
    kon,
    beskrivelse,
    dato,
    postnummer,
    by,
    landsdel,
    oremaerket,
    oremaerkenr,
    chippet,
    chipnr,
    billede,
  } = EFdata.acf; 

  let checker = () => {
    if(type === "efterlysning") return true
    else if (type==="fremlysning") return false
  }

  const [shouldWrap, setShouldWrap] = useState(false);
  const handleWrap = () => {
    if (window.innerWidth < 388) {
      setShouldWrap(true);
    } else {
      setShouldWrap(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWrap);
  });

  return (
    <PageLayout>
      <Box as="main" bg="brand.lightGrey" display={"grid"} placeContent="center" px="1rem">
        <Box as="section" maxW={{ base: "container.sm" }} pt={"2rem"}>
          <Heading display={"flex"} flexWrap={shouldWrap ? "wrap" : "nowrap"} as="h1" size="heading2" gap={ shouldWrap ? "0" : "1.5rem"}>
            <Text as="span" color={"brand.grey"}>
              {checker() === true ? "Efterlyste" : "Fremlyst"}
            </Text>{" "}
            {checker() === true ? <Text>{navn}</Text> : <Text>{kon}</Text>}
          </Heading>
        </Box>
        <Box display={"grid"} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} placeContent="center" gap={{ lg: "2rem" }}>
          <Box maxW={{ base: "container.sm" }} py={"2rem"}>
            <Box position="relative" minH={"30rem"} width={"auto"} borderTopRadius="0.2rem" overflow="hidden">
              <Image src={billede} alt={navn} layout="fill" objectFit="cover" />
            </Box>
            <Box bg={"brand.white"} color="brand.darkGrey" px={"1.5rem"} py="1.6rem" borderRadius="0.2rem">
              <Flex justifyContent={"space-between"} mb="2rem">
                <Box as="dl" display="grid" gridTemplateColumns={"repeat(2, 1fr)"} columnGap="1rem" rowGap={"1rem"}>
                  <Text as="dt" fontWeight={"light"}>
                    Køn
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {kon}
                  </Text>
                  <Text as="dt" fontWeight={"light"}>
                    Chippet
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {chippet}
                  </Text>
                </Box>
                <Box as="dl" display="grid" gridTemplateColumns={"repeat(2, 1fr)"} columnGap="1rem" rowGap={"1rem"}>
                  <Text as="dt" fontWeight={"light"}>
                    Mærket
                  </Text>
                  <Text as="dd" fontWeight={"bold"}>
                    {oremaerket}
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
                  Beskrivelse
                </Heading>
                <Text>{beskrivelse}</Text>
              </Box>
              <Flex justifyContent="space-between" gap="2rem" mt="2rem">
                {oremaerkenr === undefined ? (
                  <></>
                ) : (
                  <Flex flexWrap={"wrap"} gap="1rem">
                    <Text>Øremærkenr:</Text>
                    {oremaerkenr.length === 0 ? <Text fontWeight={"bold"}>Vides ikke</Text> : <Text fontWeight={"bold"}>{oremaerkenr}</Text>}
                  </Flex>
                )}
                {(chipnr === undefined) | (chipnr.length === 0) ? (
                  <></>
                ) : (
                  <Flex flexWrap={"wrap"} gap="1rem">
                    <Text>Chipnr:</Text>
                    {chipnr.length === 0 ? <Text fontWeight={"bold"}>Vides ikke</Text> : <Text fontWeight={"bold"}>{chipnr}</Text>}
                  </Flex>
                )}
              </Flex>
            </Box>
          </Box>
          <Box maxW={{ base: "container.sm" }} mx={{ base: "0", lg: "auto" }} mb="auto" py={"2rem"} display="grid" gap={"2rem"}>
            <Box boxShadow="md" bg={"brand.white"} p={"2rem"} borderRadius="0.2rem">
              <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
                {kon}
                {checker() === true ? " forsvandt" : " blev fundet"}
              </Heading>
              <Flex flexDirection={"column"} justifyContent="space-evenly" mt={"1rem"} gap="0.5rem">
                <Text>{dato}</Text>
                <Text>
                  {postnummer} {by}
                </Text>
                <Text>{landsdel}</Text>
              </Flex>
            </Box>
            <Box boxShadow="md" bg={"brand.white"} p={"2rem"} borderRadius="0.2rem">
              <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
                {checker() === true ? "Har du set katten?" : "Genkender du katten?"}
              </Heading>
              <Text>{checker() === true ? "Kontakt efterlyseren" : "Kontakt fremlyseren"}</Text>
              <Divider orientation="horizontal" mt="1rem" />
              <ContactEF kontaktData={EFdata.acf.kontakt} />
            </Box>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default SingleViewKat;
