import Image from "next/image";
import NextLink from "next/link";
import { Box, Heading, Text, Link, Flex, Icon } from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";

function ArticleEF({ acf, id, type, url }) {
  let oremaerkeString = () => {
    if (acf.oremaerket === "Ja") return "Øremærket";
    else if (acf.oremaerket === "Nej") return "Ikke øremærket";
    else return null;
  };
  let chippetString = () => {
    if (acf.chippet === "Ja") return "Chippet";
    else if (acf.chippet === "Nej") return "Ikke chippet";
    else return null;
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
        <Link
          h={"20rem"}
          w={"20rem"}
          flexGrow={1}
          flexDir={"column"}
          variant={"clean"}
          borderTopRadius="0.2rem"
          overflow="hidden"
        >
          <Box position="relative" minH={"13rem"} width={"100%"}>
            <Image
              src={acf.billede}
              alt={acf.navn}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex
            minH={"5rem"}
            w="100%"
            padding={"1rem"}
            justifyContent={"center"}
            align="left"
            position="relative"
            flexDir="column"
          >
            <Text fontWeight={"normal"}>
              {type === "efterlystekatte"
                ? `${acf.kon} forsvundet fra`
                : `${acf.kon} fundet ved`}
            </Text>
            <Heading as="h4" size="heading4" mt="-0.2rem">
              {acf.by}
            </Heading>
            <StringDataChecker
              oremaerkeString={oremaerkeString()}
              chippetString={chippetString()}
            />
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}

const StringDataChecker = ({ oremaerkeString, chippetString }) => {
  if (oremaerkeString === null && chippetString === null)
    return (
      <Flex gap="1rem" fontSize="xxs" mt="0.5rem" alignItems={"center"}>
        <Text>{oremaerkeString}</Text>
      </Flex>
    );
  else if (oremaerkeString === null && chippetString !== null)
    return (
      <Flex gap="1rem" fontSize="xxs" mt="0.5rem" alignItems={"center"}>
        <Text>{chippetString}</Text>
      </Flex>
    );
  else if (oremaerkeString !== null && chippetString !== null)
    return (
      <Flex gap="1rem" fontSize="xxs" mt="0.5rem" alignItems={"center"}>
        <Text>{oremaerkeString}</Text>
        <Icon as={ImDiamonds} width="0.9rem" height="0.8rem" />
        <Text>{chippetString}</Text>
      </Flex>
    );
};

export default ArticleEF;
