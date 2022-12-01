import { Box, Heading, Flex } from "@chakra-ui/react";
import SponsorArticle from "./SponsorArticleB";

export default function Bronzesponsorer({ data }) {
  let bronzesponsorer = data.filter((e) => {
    return e.acf.sponsor_type === "bronze";
  });

  return (
    <Box as="section" bgColor={"brand.white"} py={"5rem"} px={"2rem"}>
      <Heading
        as="h2"
        size="heading2"
        color={"brand.darkGrey"}
        mb={{ base: "3rem", lg: "5rem" }}
        textAlign={"center"}
      >
        Bronzesponsorer
      </Heading>
      <Flex wrap="wrap" gap="2rem" justifyContent={"center"}>
        {bronzesponsorer.map((sponsor) => {
          return <SponsorArticle key={sponsor.id} {...sponsor} />;
        })}
      </Flex>
    </Box>
  );
}
