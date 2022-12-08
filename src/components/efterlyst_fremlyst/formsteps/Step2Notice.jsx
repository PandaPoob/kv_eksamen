import { Heading, Text, Flex } from "@chakra-ui/react";

function Step2Notice() {
  return (
    <Flex
      bg={"brand.blue"}
      color="brand.white"
      p="2rem"
      boxShadow={"md"}
      gridColumn={{ lg: "2/3" }}
      maxH={{ lg: "25vh" }}
      borderRadius={"0.2rem"}
      flexDir="column"
      justify={"center"}
    >
      <Heading as={"h3"} size="heading4" mb={"1rem"}>
        Bemærk
      </Heading>
      <Text>
        Dine kontaktoplysninger vil være synlig på announcen sådan at du kan
        kontaktes hvis nogen har fundet hvad du søger. Derfor anbefaler vi at du
        overvejer hvilke oplysninger du vil give. Du skal mindst angive en måde
        du kan kontaktes på.
      </Text>
    </Flex>
  );
}

export default Step2Notice;
