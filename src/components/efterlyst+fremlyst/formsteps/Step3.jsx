import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Step3() {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ xl: "1fr 1fr" }}
      maxW="container.xxl"
      gap={"4rem"}
    >
      <Box
        bg={"brand.white"}
        boxShadow={"md"}
        p="2rem"
        borderRadius={"0.1rem"}
        display="grid"
      >
        <Heading as={"h1"} size="heading3">
          Tak for din henvendelse
        </Heading>
        <Text>
          Din efterlysning vil blive behandlet snarest muligt og vil blive vist
          på vores liste over efterlyste katte{" "}
          <NextLink href={"/efterlysning/efterlyste-katte"} passHref>
            <Link variant={"inLink"}>her.</Link>
          </NextLink>
        </Text>
        <NextLink href={"/efterlysning/mistet-kat"} passHref>
          <Link variant={"redBtn"} px={"1.1rem"} py={"0.6rem"}>
            Andre råd
          </Link>
        </NextLink>
      </Box>

      <Box
        bg={"brand.blue"}
        color="brand.white"
        boxShadow={"md"}
        p="2rem"
        borderRadius={"0.1rem"}
      >
        <Heading as={"h2"} size="heading3" mb="0.8rem">
          Andre råd til hvad du kan gøre?
        </Heading>
        <Text>
          <Text as={"span"}>
            Du kan finde andre råd om hvad du kan gøre, når du har mistet din
            kat{" "}
          </Text>

          <NextLink href={"/efterlysning/mistet-kat"} passHref>
            <Link variant={"inLink"}>her</Link>
          </NextLink>
        </Text>
      </Box>
    </Box>
  );
}
export default Step3;
