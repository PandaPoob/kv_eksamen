import { Box, Heading, Text, Flex, Divider, Icon } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai"

function ContactEF({ EFdata }) {

    const {
      kontaktmail,
      kontaktnavn,
      kontaktnummer,
      facebooklink
      } = EFdata.acf;

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
           {kontaktnummer}
          </Heading>
        </Flex>

        <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
          <Flex as="dt" alignItems={"center"}>
            <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
          </Flex>
          <Heading as="dd" size={"heading5"}>
            {kontaktmail}
          </Heading>
        </Flex>
        <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
          <Flex as="dt" alignItems={"center"}>
            <Icon color="brand.redCta" w={8} h={8} as={AiOutlineFacebook} />
          </Flex>
          <Heading as="dd" size={"heading5"}>
            {kontaktnavn}
          </Heading>
        </Flex>
      </Box>

      <Divider
        display={{ base: "block", lg: "none" }}
        orientation="horizontal"
        mb="1rem"
      />
    </Box>
  );
}

export default ContactEF;
