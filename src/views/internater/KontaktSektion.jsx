import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import Telefontider from "./Telefontider";
import { BsEnvelope } from "react-icons/bs";
import Abningstider from "./Abningstider";
import FindOs from "./FindOs";

export default function KontaktSektion({ data }) {
  return (
    <Box
      id="kontaktos"
      as="section"
      display="grid"
      placeContent={"center"}
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
    >
      <Box maxW={{base:"70ch", lg: "container.xl"}}>
        <Heading as="h2" size="heading2" textAlign={"center"}>
          Kontakt os
        </Heading>
        <Box
          as="section"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            //md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
          gap="3rem"
          alignItems={"start"}
          py="3rem"
        >
          <Box display={"grid"} gap="1rem">
            <Telefontider data={data.telefontider} tlfnr={data.telefonnummer} />
            <a href={`mailto:${data.mail}`}>
              <Flex
                as="article"
                justifyContent={"center"}
                alignItems="center"
                gap="1rem"
                bg={"brand.white"}
                boxShadow="md"
                p={"2rem"}
                borderRadius="0.3rem"
              >
                <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
                <Heading as="h4" size="heading5">
                  {data.mail}
                </Heading>
              </Flex>
            </a>
          </Box>
          <Abningstider data={data.abningstider} />
          <FindOs data={data.findos} />
        </Box>
      </Box>
    </Box>
  );
}
