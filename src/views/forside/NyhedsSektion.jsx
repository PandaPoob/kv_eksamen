import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import NewsArticle from "../../components/articles/NewsArticle";
import NextLink from "next/link";

function NyhedsSektion({ nyhedsData }) {
  let udvalgteArtikler = nyhedsData.filter((e) => {
    return e.acf.udvalgtArtikel === true;
  });
  return (
    <Box
      as="section"
      display={"grid"}
      placeContent="center"
      bgColor={"brand.darkGrey"}
      color="brand.white"
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
    >
      <Heading as="h2" size={"heading2"} textAlign="center">
        Seneste nyt
      </Heading>
      <Flex
        justify={"center"}
        flexWrap="wrap"
        gap={{ base: "1rem", lg: "2rem" }}
        py={"2rem"}
        maxW="container.xl"
      >
        {udvalgteArtikler.map((artikel, i) => (
          <NewsArticle key={i} {...artikel} />
        ))}
      </Flex>
      <NextLink href="/nyheder" passHref>
        <Link
          variant="redBtn"
          mx={"auto"}
          my="2rem"
          width="12rem"
          justifyContent="center"
        >
          Se alle nyheder
        </Link>
      </NextLink>
    </Box>
  );
}

export default NyhedsSektion;
