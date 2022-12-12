import { Box, Heading, Text } from "@chakra-ui/react";

function SMSogMobile() {
  return (
    <Box display={"grid"} gap="1rem" gridrow={"1/2"}>
      <Box
        bg="brand.darkGrey"
        p="2rem"
        color="brand.white"
        borderRadius={"0.2rem"}
      >
        <Heading as="h2" size="heading4" pb="1rem">
          Donér med SMS
        </Heading>
        <Text>
          Send KAT til <b>1919</b> og støt med 100 kr. (+ alm. sms-takst).
        </Text>
        <Text>100kr svarer til et stykke legetøj til kattene </Text>
      </Box>
      <Box
        bg="brand.darkGrey"
        p="2rem"
        color="brand.white"
        borderRadius={"0.2rem"}
      >
        <Heading as="h2" size="heading4" pb="1rem">
          Donér med mobilepay
        </Heading>
        <Text>
          Send valgfrit beløb til nummeret <b>477800</b> og skriv{" "}
          <q>Donation</q> i emnefeltet.
        </Text>
      </Box>
    </Box>
  );
}
export default SMSogMobile;
