import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import NewsArticle from "../../components/generics/NewsArticle";
import NextLink from "next/link";

function NyhedsSektion({nyhedsData}){

  let udvalgteArtikler = nyhedsData.filter((e)=> {
    return e.acf.udvalgtArtikel === true;
  });

    console.log(nyhedsData)
    return (
      <Box bgColor={"brand.darkGrey"} color="brand.white" py={"2rem"} px="1rem">
        <Heading as="h2" size={"heading2"} textAlign="center">
          Seneste nyt
        </Heading>
        <Flex justify={"center"} flexWrap="wrap" gap="1rem" py={"2rem"}>
          {udvalgteArtikler.map((artikel, i) => (
            <NewsArticle key={i} {...artikel} />
          ))}
        </Flex>
        <NextLink href="/nyheder" passHref>
          <Link variant="redBtn" m={"auto"} maxW="12rem" textAlign={"center"} marginInline="auto" justifyContent="center">
            Se alle nyheder
          </Link>
        </NextLink>
      </Box>
    );
}

export default NyhedsSektion;