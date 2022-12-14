import { Box, Text, Heading, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function NewsArticle({ acf, id }) {
  return (
    <Box
      as="article"
      bg="brand.white"
      borderRadius={"0.2rem"}
      boxShadow="md"
      h={"20.5rem"}
      w={"18rem"}
      color="brand.blue"
      transition="all .2s ease-in-out"
      _hover={{
        transform: "translateY(-0.5rem) ",
      }}
    >
      <NextLink href={`/nyheder/${id}`} passHref prefetch={false}>
        <Link
          h={"20.5rem"}
          w={"18rem"}
          flexGrow={1}
          flexDir={"column"}
          variant={"clean"}
          borderTopRadius="0.2rem"
          overflow="hidden"
          alignItems={"flex-start"}
        >
          <Box position="relative" minH={"10rem"} width={"100%"}>
            <Image
              placeholder={"blur"}
              blurDataURL={acf.featuredimage}
              alt="artikel-billede"
              src={acf.featuredimage}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex padding={"1rem"} flexDir="column">
            <Text fontWeight={"medium"} fontSize={"small"} textAlign={"left"}>
              {acf.dato}
            </Text>
            <Heading as="h3" size="heading4" mt="0.3rem">
              {acf.titel}
            </Heading>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}
