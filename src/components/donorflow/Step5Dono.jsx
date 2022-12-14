import { Box, Heading, Text, Link, Button, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

function Step5Dono() {
  return (
    <Flex mb="2rem" flexDir="column" justifySelf="center" mx="1rem">
      <Box
        display="grid"
        bg={"brand.white"}
        py={{ base: "2rem", md: "2rem" }}
        px={{ base: "1rem", md: "4rem" }}
        boxShadow={"md"}
        borderRadius={"0.2rem"}
        maxW="container.md"
        minW={{ lg: "container.md" }}
      >
        <Heading
          as="h1"
          size={"heading2"}
          textAlign="center"
          py={{ base: "1rem" }}
        >
          Tusinde tak!
        </Heading>
        <Text textAlign="center">
          Din støtte er nu gennemført. Tak fordi du hjælper os med at hjælpe
          kattene.
        </Text>
        <NextLink href={`/`} passHref prefetch={false}>
          <Link
            variant={"redBtn"}
            textAlign={"center"}
            mt={"4rem"}
            mb={"2rem"}
            justifyContent="center"
          >
            Gå til forsiden
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
}
export default Step5Dono;
