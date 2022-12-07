import Image from "next/image";
import NextLink from "next/link";
import fifth from "../../assets/svgs/fifth.svg";
import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";



function ArticleEF({ acf, id, type, url }) {

  let oremaerkeString = () => {
    if (acf.oremaerket === "Ja") return "Er øremærket";
    else if (acf.oremaerket === "Nej") return "Er ikke øremærket";
  }
  let chippetString = () => {
  if (acf.chippet === "Ja") return "Er chippet";
  else if (acf.chippet === "Nej") return "Er ikke chippet";
  };

  return (
    <Box
      as="article"
      bg="brand.white"
      borderRadius={"0.2rem"}
      boxShadow="md"
      minH={"20rem"}
      minW={"20rem"}
      transition="all .2s ease-in-out"
      _hover={{
        transform: "translateY(-0.5rem) translateX(0.2rem)",
      }}
    >
      <NextLink href={`${url}${id}`} passHref>
        <Link h={"20rem"} w={"20rem"} flexGrow={1} flexDir={"column"} variant={"clean"} borderTopRadius="0.2rem" overflow="hidden">
          <Box position="relative" minH={"14rem"} width={"100%"}>
            <Image src={acf.billede} alt={acf.navn} layout="fill" objectFit="cover" />
          </Box>
          <Flex minH={"5rem"} w="100%" padding={"1rem"} justifyContent={"center"} align="left" position="relative" flexDir="column">
            <Text fontWeight={"normal"}>{type === "efterlystekatte" ? "Kat forsvundet fra" : "Kat fundet ved"}</Text>
            <Heading as="h4" size="heading4">
              {acf.by}
            </Heading>
            <Flex gap="1rem" fontSize="xxs">
              <Text>{oremaerkeString()}</Text>
              <Image src={fifth} alt={"divider"} height={8} width={8} />
              <Text>{chippetString()}</Text>
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}

export default ArticleEF;
