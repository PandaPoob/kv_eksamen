import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import Image from "next/image";
import phone from "../../../assets/svgs/phone.svg";
import mail from "../../../assets/svgs/mail.svg";

function ContactBox({ internat }) {
  return (
    <Box
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
    >
      <Flex as={"dl"}>
        <Image
          as="dt"
          src={phone}
          alt={"Telefon nummer"}
          height={40}
          width={40}
        />
        <Heading as="dd" size={"heading4"}>
          0000000
        </Heading>
      </Flex>
      <Flex as={"dl"}>
        <Image as="dt" src={mail} alt={"Email"} height={40} width={40} />
        <Heading as="dd" size={"heading4"}>
          kv@kattens-vaern.dk
        </Heading>
      </Flex>
      <Divider orientation="horizontal" />

      <Box>
        <Text fontSize={"sm"}>Telefontider</Text>
        <Box as={"dl"} display="grid" gridTemplateColumns={"repeat(2, 1fr)"}>
          <Text as="dt">Man - Tirs - Tors:</Text>
          <Text as="dd" fontWeight={"bold"}>
            09:30 - 15:00
          </Text>

          <Text as="dt">Ons - Fre:</Text>
          <Text as="dd" fontWeight={"bold"}>
            09:30 - 17:00
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactBox;
