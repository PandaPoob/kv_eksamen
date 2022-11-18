import Image from "next/image";
import NextLink from "next/link";
import fifth from "../../assets/svgs/fifth.svg";
import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";

function Article({ acf, id }) {
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
      <NextLink href={`/adopter/adoptionskatte/${id}`} passHref>
        <Link
          h={"20rem"}
          w={"20rem"}
          flexGrow={1}
          flexDir={"column"}
          variant={"clean"}
          borderTopRadius="0.2rem"
          overflow="hidden"
        >
          <Box position="relative" minH={"14rem"} width={"100%"}>
            <Image
              src={acf.profil_billede}
              alt={acf.navn}
              layout="fill"
              objectFit="cover"
            />
          </Box>

          <Flex
            minH={"5rem"}
            justifyContent={"center"}
            position="relative"
            flexDir="column"
            gap={"0.4rem"}
          >
            <Heading as="h4" size="heading4" textAlign={"center"}>
              <Text as="span" fontWeight={"normal"}>
                {acf.tag}
              </Text>{" "}
              {acf.navn}
            </Heading>
            <Flex justifyContent={"center"} gap="1rem" fontSize="xxs">
              <Text>{acf.kon}</Text>
              <Image src={fifth} alt={"divider"} height={8} width={8} />
              <Text>{acf.alder}</Text>
              <Image src={fifth} alt={"divider"} height={8} width={8} />
              <Text>{acf.internat}</Text>
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}

export default Article;
