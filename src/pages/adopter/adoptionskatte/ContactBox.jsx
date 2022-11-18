import { Box, Heading, Text, Flex, Divider, Icon } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

function ContactBox({ internat }) {
  function getKontaktInfo() {
    if (internat === "Aalborg") {
      return {
        email: "aalborg@kattens-vaern.dk",
        tlf: "38881200",
        tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
      };
    } else if (internat === "Billund") {
      return {
        email: "billund@kattens-vaern.dk",
        tlf: "38881200",
        tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
      };
    } else if (internat === "Brondby") {
      return {
        email: "Internat@kattens-vaern.dk",
        tlf: "38881200",
        tlfTid: [{ dage: "Man-Fre", tidsrum: "10:00-12:00" }],
      };
    } else {
      return {
        email: "kvslagelse@gmail.com",
        tlf: "38881200",
        tlfTid: [
          { dage: "Man, Ons, Tors", tidsrum: "13:00-15:00" },
          { dage: "Fre", tidsrum: "13:00-14:30" },
        ],
      };
    }
  }

  return (
    <Box
      pt={"1rem"}
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "1.4fr 1fr" }}
    >
      <Box>
        <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
          <Flex as="dt" alignItems={"center"}>
            <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
          </Flex>

          <Heading as="dd" size={"heading5"}>
            {getKontaktInfo().tlf}
            {/*   {internatInfo.tlf} */}
          </Heading>
        </Flex>

        <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
          <Flex as="dt" alignItems={"center"}>
            <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
          </Flex>
          <Heading as="dd" size={"heading5"}>
            {getKontaktInfo().email}
            {/*  {internatInfo.email} */}
          </Heading>
        </Flex>
      </Box>

      <Divider
        display={{ base: "block", lg: "none" }}
        orientation="horizontal"
        mb="1rem"
      />

      <Box>
        <Text fontSize={"heading5"} mb={"0.5rem"}>
          Telefontider
        </Text>

        {getKontaktInfo().tlfTid.map((t) => {
          return (
            <Flex
              as={"dl"}
              key={t.dage}
              fontSize={"xxs"}
              justify="space-between"
              px={"0.2rem"}
              mb={"0.2rem"}
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
