import { Box, Heading, Flex } from "@chakra-ui/react";
import SponsorArticle from "./SponsorArticleA";

export default function Hovedsponsorer({ data }) {
  let hovedsponsorer = data.filter((e) => {
    return e.acf.sponsor_type === "hoved";
  });

  return (
    <Box as="section" bgColor={"brand.darkGrey"} py={"5rem"} px={"2rem"}>
      <Heading
        as="h2"
        size="heading2"
        color={"brand.white"}
        mb={{ base: "3rem", lg: "5rem" }}
        textAlign={"center"}
      >
        Hovedsponsorer
      </Heading>

      <Flex
        wrap="wrap"
        gap="2rem"
        justifyContent={"center"}
        /*   px={{ base: "1rem", md: "2rem" }} */
      >
        {hovedsponsorer.map((sponsor) => {
          return <SponsorArticle key={sponsor.id} {...sponsor} />;
        })}
      </Flex>
    </Box>
  );
}
