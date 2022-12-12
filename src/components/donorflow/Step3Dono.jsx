import { Box, Heading, Text, Divider, Button, Flex } from "@chakra-ui/react";

function Step3Dono({ step1Belob, step2Info, onPostCallBack }) {
  return (
    <Flex mb="2rem" flexDir="column" justifySelf="center">
      <Box
        display="grid"
        bg={"brand.white"}
        py={{ base: "2rem", md: "2rem" }}
        px={{ base: "2rem", md: "4rem" }}
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
          Oversigt
        </Heading>
        <Heading as="h2" size={"heading5"} py={{ base: "1rem" }}>
          Din information
        </Heading>
        <Box
          as="dl"
          display="grid"
          gridTemplateColumns={"repeat(2, 1fr)"}
          columnGap="1rem"
          rowGap={"1rem"}
        >
          <Text as="dt">Email</Text>
          <Text as="dd" fontWeight={"medium"} textAlign="right">
            {step2Info.email}
          </Text>

          <Text as="dt">Fulde navn</Text>
          <Text as="dd" fontWeight={"medium"} textAlign="right">
            {step2Info.fullName}
          </Text>

          <Text as="dt">Adresse</Text>
          <Text as="dd" fontWeight={"medium"} textAlign="right">
            {step2Info.adresse}
          </Text>

          <Text as="dt">Postnummer & by</Text>
          <Text as="dd" fontWeight={"medium"} textAlign="right">
            {step2Info.postnummer} {step2Info.by}
          </Text>
          <Text as="dt">Land</Text>
          <Text as="dd" fontWeight={"medium"} textAlign="right">
            {step2Info.land}
          </Text>
        </Box>
        <Divider orientation="horizontal" my="1.5rem" />
        <Box
          as="dl"
          display="grid"
          alignItems="center"
          gridTemplateColumns={"repeat(2, 1fr)"}
          columnGap="1rem"
          rowGap={"1rem"}
        >
          <Text as="dt" fontWeight={"bold"} fontSize={{ base: "xs", lg: "sm" }}>
            Engangsbeløb
          </Text>
          <Text as="dd" fontWeight={"bold"} fontSize="md" textAlign="right">
            {step1Belob.belobRadioGroup === "Andet beløb*"
              ? step1Belob.andetBelobTal
              : step1Belob.belobRadioGroup}{" "}
            kr.
          </Text>
        </Box>

        <Button
          onClick={() => onPostCallBack()}
          mt="2rem"
          variant="redBtn"
          mb="1rem"
        >
          Gå til betaling
        </Button>
      </Box>
    </Flex>
  );
}
export default Step3Dono;
