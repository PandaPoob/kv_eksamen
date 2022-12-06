import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import CatBreadCrumb from "./CatBreadCrumb";

function Step3({
  setCurrentStepIndex,
  setStep1State,
  setStep2State,
  setAuthToken,
  setImgUrl,
}) {
  function reset() {
    setStep1State("");
    setStep2State("");
    setAuthToken("");
    setImgUrl("");
    setCurrentStepIndex(0);
  }

  return (
    <>
      <Box
        bg={"brand.white"}
        boxShadow={"md"}
        p="2rem"
        borderRadius={"0.1rem"}
        display="grid"
        justifyContent={"center"}
        mb={{ lg: "10rem" }}
      >
        <CatBreadCrumb step={"step3"} />
        <Heading as={"h1"} size="heading3" textAlign={"center"} mt="2rem">
          Tak for din henvendelse!
        </Heading>
        <Text maxW="60ch" textAlign={"center"}>
          Din efterlysning vil blive behandlet snarest muligt og vil blive vist
          på vores liste over efterlyste katte{" "}
          <NextLink href={"/efterlysning/efterlyste-katte"} passHref>
            <Link onClick={() => reset()} variant={"inLink"}>
              her.
            </Link>
          </NextLink>
        </Text>
        <Button
          mt="4rem"
          mb="2rem"
          variant={"formSubmitBtn"}
          onClick={() => reset()}
        >
          Gå tilbage
        </Button>
      </Box>

      <Box
        bg={"brand.blue"}
        color="brand.white"
        boxShadow={"md"}
        p="2rem"
        borderRadius={"0.1rem"}
        display="grid"
        justifyContent={"center"}
        maxH={{ lg: "12rem" }}
      >
        <Heading as={"h2"} size="heading4" mb="0.8rem">
          Andre råd til hvad du kan gøre?
        </Heading>
        <Text>
          <Text as={"span"}>
            Du kan finde andre råd om hvad du kan gøre, når du har mistet din
            kat{" "}
          </Text>

          <NextLink href={"/efterlysning/mistet-kat"} passHref>
            <Link onClick={() => reset()} variant={"inLink"}>
              her
            </Link>
          </NextLink>
        </Text>
      </Box>
    </>
  );
}
export default Step3;
