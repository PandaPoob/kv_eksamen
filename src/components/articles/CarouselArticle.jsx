import Image from "next/image";
import NextLink from "next/link";
import { Link, Box, Heading, Flex } from "@chakra-ui/react";

function CarouselArticle({ id, acf }) {
  return (
    <Box
      as="article"
      bg="brand.white"
      borderRadius={"0.2rem"}
      boxShadow="md"
      h={"20rem"}
      w={"20rem"}
      transition="all .2s ease-in-out"
      _hover={{
        transform: "translateY(-0.5rem) ",
      }}
    >
      {" "}
      <NextLink href={`/katteviden/${id}`} passHref prefetch={false}>
        <Link
          h={"20rem"}
          w={"20rem"}
          flexGrow={1}
          flexDir={"column"}
          variant={"clean"}
          borderTopRadius="0.2rem"
          overflow="hidden"
          alignItems={"flex-start"}
        >
          <Box position="relative" minH={"14rem"} width={"100%"}>
            <Image
              priority="true"
              src={acf.splash_billede.billede}
              alt={acf.splash_billede.alt}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex px={"1rem"} pt="0.5rem">
            <Heading as={"h2"} size="heading4">
              {acf.overskrift}
            </Heading>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}

export default CarouselArticle;
