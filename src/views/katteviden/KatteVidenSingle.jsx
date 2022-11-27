import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import PageLayout from "../../components/layout/PageLayout";
import IndholdSection from "./IndholdSection";
import LinkSection from "./LinkSection";
import GallerySection from "./GallerySection";

function KatteVidenSingle({ artikelData }) {
  const { acf } = artikelData;
  const { splash_billede, indhold, forfatter, link, gallery } = acf;

  const sektioner = Object.entries(indhold).map((e) => e[1]);
  const cleansektioner = sektioner.filter((s) => {
    if (s.venstre.type) return s;
  });

  return (
    <PageLayout>
      <Box width={"100vw"} height={{ base: "50vh", md: "50vh", xl: "60vh" }}>
        <Box
          position="relative"
          height={"100%"}
          width={"100%"}
          display="grid"
          alignItems={"center"}
          justifyContent={{ base: "center", lg: splash_billede.tekst_position }}
        >
          <Box
            zIndex={1}
            position="absolute"
            top={"0"}
            width="100%"
            height={"100%"}
            bgColor="brand.darkGrey"
            opacity={{ base: "65%", lg: "50%" }}
          ></Box>
          <Image
            src={splash_billede.billede}
            alt={splash_billede.alt}
            layout="fill"
            objectFit="cover"
          />
          <Box px={"2rem"} zIndex={1} position="relative">
            <Heading as={"h1"} size="heading2" color={"brand.white"}>
              {acf.overskrift}
            </Heading>
          </Box>
        </Box>
      </Box>
      <Flex justify={"flex-end"} pt={"0.5rem"} px={"1rem"}>
        <Text fontSize={"xxs"}>af {forfatter}</Text>
      </Flex>
      {cleansektioner.map((s, index) => (
        <IndholdSection key={index} {...s} />
      ))}
      {link.url ? <LinkSection link={link} /> : null}
      {gallery.billede_1 !== false ? (
        <GallerySection gallery={gallery} />
      ) : null}
    </PageLayout>
  );
}

export default KatteVidenSingle;
