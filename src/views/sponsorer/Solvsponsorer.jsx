import { Box, Heading, Flex } from "@chakra-ui/react";
import SponsorArticle from "./SponsorArticleA";

export default function Solvsponsorer({ data }) {
  let solvsponsorer = data.filter((e) => {
    return e.acf.sponsor_type === "solv";
  });

  return (
    <Box as="section" bgColor={"brand.lightGrey"} py={"5rem"}>
      <Heading
        as="h2"
        size="heading2"
        mb="5rem"
        textAlign={"center"}
        color={"brand.darkGrey"}
      >
        Sølvsponsorer
      </Heading>

      <Flex wrap="wrap" gap="2rem" justifyContent={"center"}>
        {solvsponsorer.map((sponsor) => {
          return <SponsorArticle key={sponsor.id} {...sponsor} />;
        })}
      </Flex>
    </Box>
  );
}
