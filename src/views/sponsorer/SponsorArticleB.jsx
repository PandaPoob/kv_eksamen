import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function SponsorArticle({ acf }) {
  let colorchecker = () => {
    if (acf.navn === "Axon") return "#000000";
    if (acf.navn === "Forskel") return "#FFDEC6";
    if (acf.navn === "Uldtoj") return "#E3E3E3";
    if (acf.navn === "Casino Online") return "#510101";
    if (acf.navn === "Spar2ner") return "#41A4FF";
    if ((acf.navn === "Spilforsyningen") | (acf.navn === "Specialkamera"))
      return "#FFFFFF";
  };

  return (
    <Box
      bgColor={colorchecker()}
      minW={{ base: "18.75rem", md: "20rem" }}
      maxW={{ base: "23.1rem", md: "22rem", lg: "23.1rem" }}
      minH="4.3rem"
      maxH="9.5rem"
      color="brand.darkGrey"
      borderRadius={"0.2rem"}
      boxShadow="md"
    >
      <Flex
        position={"relative"}
        my={"auto"}
        justify={"center"}
        mt={"1.75rem"}
        mb={"1.75rem"}
        pr={"4.3rem"}
        pl={"4.3rem"}
      >
        <Image
          borderTopRadius={"5px"}
          alt="billede af sponsor logo"
          src={acf.billede}
          width={"250px"}
          height={"75px"}
        />
      </Flex>
    </Box>
  );
}
