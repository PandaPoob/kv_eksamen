import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import Image from "next/image";
import PageLayout from "../layout/PageLayout";
import ContactEF from "../generics/ContactEF";

function SingleViewKat({ efterlystKatData, type }) {
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
  } = efterlystKatData.acf;

  let checker = () => {
    if(type === "efterlysning") return true
    else if (type==="fremlysning") return false
  }

  return (
    <PageLayout>
        <Box as="main" bg="brand.lightGrey" display={"grid"} placeContent="center">
            <Box 
                as="section" 
                maxW={{ base: "container.sm" }}
                px={"1rem"}
                py={"2rem"}
            >
                <Heading as="h1" size="heading2">
                    <Text as="span" color={"brand.grey"}>
                        {checker()===true ? ("Efterlyst"):("Fremlyst")}
                    </Text>
                   {" "}
                        {kon}
                </Heading>
            </Box>
            <Box display={"grid"} gridTemplateColumns={{ lg: "1fr 1fr" }} >
                <Box maxW={{ base: "container.sm" }} px={"1rem"} py={"2rem"}>
                    <Box position="relative" minH={"30rem"} width={"100%"} borderTopRadius="0.2rem" overflow="hidden">
                        <Image
                            src={billede}
                            alt={navn}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Box>
                    <Box bg={"brand.white"} color="brand.darkGrey" px={"1.5rem"} py="1.6rem" borderRadius="0.2rem">
                        <Flex justifyContent={"space-between"} mb="2rem">
                            <Box
                                as="dl"
                                display="grid"
                                gridTemplateColumns={"repeat(2, 1fr)"}
                                columnGap="1rem"
                                rowGap={"1rem"}
                            >
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
                            <Box
                                as="dl"
                                display="grid"
                                gridTemplateColumns={"repeat(2, 1fr)"}
                                columnGap="1rem"
                                rowGap={"1rem"}
                            >
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
                    </Box>
                </Box>
                <Box
                    maxW={{ base: "container.sm" }}
                    mx={{base:"0", lg: "auto"}}
                    mb="auto"
                    px={"1rem"}
                    py={"2rem"}
                    display="grid"
                    gap={"2rem"}
                >
                    <Box boxShadow="md" bg={"brand.white"} p={"2rem"} borderRadius="0.2rem">
                        <Heading as={"h2"} size="svheading" mb={"0.5rem"}>{kon}  
                        {checker()===true ? (" forsvundet") : (" fundet")}
                        </Heading>
                        <Flex flexDirection={"column"} justifyContent="space-evenly" mt={"1rem"} gap="0.5rem">
                            <Text>{dato}</Text>
                            <Text>{postnummer} {by}</Text>
                            <Text>{landsdel}</Text>
                        </Flex>
                    </Box>
                    <Box boxShadow="md" bg={"brand.white"} p={"2rem"} borderRadius="0.2rem">
                        <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
                            {checker()===true ? ("Har du set katten?") : ("Genkender du katten?")}
                        </Heading>
                        <Text>
                            {checker()===true ? ("Kontakt efterlyseren") : ("Kontakt fremlyseren")}
                        </Text>
                        <Divider orientation="horizontal" mt="1rem" />
                        <ContactEF efterlystKatData={efterlystKatData}/>
                    </Box>
                </Box>
            </Box>
      </Box>
    </PageLayout>
  );
}

export default SingleViewKat;
