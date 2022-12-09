import { Heading, Text, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

function VildKat() {
  return (
    <Flex
      as="section"
      bg="brand.darkGrey"
      justifyContent="center"
      color="brand.white"
      alignItems={"center"}
      flexDirection="column"
      minH="50vh"
      px="1rem"
    >
      {" "}
      <Heading as="h2" size="heading2" mb={"1rem"}>
        Hvis katten er vild
      </Heading>
      <Text>
        Hvis katten er så vild, at den er uhåndterbar skal du kontakte os i
        forbindelse med indfangning.
      </Text>
      <NextLink href={`/indberetning/opret-en-sag`} passHref>
        <Link
          variant={"redBtn"}
          textAlign={"center"}
          mt={"1.5rem"}
          mb={"2rem"}
          justifyContent="center"
        >
          Opret en sag
        </Link>
      </NextLink>
    </Flex>
  );
}

export default VildKat;
