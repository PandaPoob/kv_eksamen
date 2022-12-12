import { Box, Heading, Flex } from "@chakra-ui/react";
import SponsorArticle from "./SponsorArticleB";

export default function Potesponsorer({ data }) {
  let potesponsorer = data.filter((e) => {
    return e.acf.sponsor_type === "pote";
  });

  return (
    <Box
      as="section"
      bgColor={"brand.darkGrey"}
      py={"5rem"}
      px={"2rem"}
      borderBottom="1px solid"
      borderColor="brand.redCta"
    >
      <Heading
        as="h2"
        size="heading2"
        color={"brand.white"}
        mb={{ base: "3rem", lg: "5rem" }}
        textAlign={"center"}
      >
        Potesponsorer
      </Heading>
      <Flex wrap="wrap" gap="2rem" justifyContent={"center"}>
        {potesponsorer.map((sponsor) => {
          return <SponsorArticle key={sponsor.id} {...sponsor} />;
        })}
      </Flex>
    </Box>
  );
}
