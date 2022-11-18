import { Box, Heading, Text, Flex, Divider, Icon } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

function ContactBox({ internat }) {
  const kontaktInfo = [
    {
      internat: "Aalborg",
      email: "aalborg@kattens-vaern.dk",
      tlf: "38881200",
      tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
    },
    {
      internat: "Billund",
      email: "billund@kattens-vaern.dk",
      tlf: "38881200",
      tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
    },
    {
      internat: "Brondby",
      email: "Internat@kattens-vaern.dk",
      tlf: "38881200",
      tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
    },
    {
      internat: "Slagelse",
      email: "kvslagelse@gmail.com",
      tlf: "38881200",
      tlfTid: [
        { dage: "Man, Ons, Tors", tidsrum: "13:00-15:00" },
        { dage: "Fre", tidsrum: "13:00-14:30" },
      ],
    },
  ];

  const internatInfo = kontaktInfo.find((obj) => obj.internat === internat);

  return (
    <Box
      py={"1rem"}
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
    >
      <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
        <Flex as="dt" alignItems={"center"}>
          <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
        </Flex>

        <Heading as="dd" size={"heading5"}>
          {internatInfo.tlf}
        </Heading>
      </Flex>

      <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
        <Flex as="dt" alignItems={"center"}>
          <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
        </Flex>
        <Heading as="dd" size={"heading5"}>
          {internatInfo.email}
        </Heading>
      </Flex>

      <Divider orientation="horizontal" mb="1rem" />

      <Box>
        <Text fontSize={"smallH"} mb={"0.5rem"}>
          Telefontider
        </Text>

        {internatInfo.tlfTid.map((t) => {
          return (
            <Flex
              as={"dl"}
              key={internatInfo.internat}
              justify="space-between"
              px={"0.2rem"}
            >
              <Text as="dt">{t.dage}:</Text>
              <Text as="dd" fontWeight={"bold"}>
                {t.tidsrum}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}

export default ContactBox;
