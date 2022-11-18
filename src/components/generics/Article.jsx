import Image from "next/image";
import NextLink from "next/link";
import fifth from "../../assets/svgs/fifth.svg";
import { Box, Heading, Text, Link, Flex, Icon } from "@chakra-ui/react";

function Article({ acf, id }) {
  //netlify
  return (
    <Box
      as="article"
      minH={"20rem"}
      minW={"20rem"}
      bg="brand.white"
      borderRadius={"0.2rem"}
      boxShadow="md"
      transition="all .2s ease-in-out"
      _hover={{
        transform: "translateY(-0.5rem) translateX(0.2rem)",
      }}
    >
      <NextLink href={`/adopter/adoptionskatte/${id}`} passHref legacyBehavior>
        <Link variant={"clean"}>
          <Box
            position="relative"
            height={"65%"}
            width={"20rem"}
            borderTopRadius="0.2rem"
            overflow="hidden"
          >
            <Image
              src={acf.profil_billede}
              alt={acf.navn}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex
            height="35%"
            justifyContent={"center"}
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
