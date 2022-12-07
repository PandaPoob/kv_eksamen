import React from 'react'
import { Box, Heading, Text, Divider, Icon, Flex, Link } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { useBreakpointValue } from '@chakra-ui/react';

export default function KTKontaktSection() {

    const dividerOrientation = useBreakpointValue({ base: "horizontal", md: "vertical", lg: "vertical" });

  return (
    <Box display={"grid"} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: "2rem", md: "4rem" }} maxW="container.xl" m="auto" px="1rem" py={{ base: "3rem", md: "6rem" }}>
      <Box>
        <Heading as="h2" size="heading4" mb="1rem">
          Overvejer du at støtte Kattens Værn i dit testamente?{" "}
        </Heading>
        <Text>
          Vi anbefaler altid, at du tager en advokat med på råd, når du ønsker at tegne et testamente. På den måde, sikrer du dig, at alle formelle krav i testamentet overholdes. Du kan også selv skrive dit testamente,
          men en advokat kan hjælpe med at få testamentet registreret hos en notar, så det er juridisk gyldigt. Samtidig kan advokaten, også hjælpe dig med at testamentet nøje opfylder dine ønsker og behov.
        </Text>
      </Box>
      <Box bg="brand.darkGrey" color="brand.white" borderRadius={"0.3rem"} p="2rem" maxW={{ base: "20rem", md: "40rem" }} m="auto">
        <Heading as="h4" size="heading5" mb="1rem">
          Kontakt vores advokat til en uforpligtende samtale
        </Heading>
        <Text>Karen Wung-Sung hos ADVODAN</Text>
        <Divider orientation="horizontal" borderColor={"brand.white"} my="1rem" />
        <Flex justifyContent={"space-between"} gap="1rem" flexDir={{ base: "column", md: "row" }}>
          <Flex alignItems={"center"} gap="0.5rem">
            <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
            <Text>70 30 10 06</Text>
          </Flex>
          <Divider orientation={dividerOrientation} height={"2rem"}></Divider>
          <Link variant="clean" href="mailto:kaws@advodan.com">
            <Flex alignItems={"center"} gap="0.5rem">
              <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
              <Text>kaws@advodan.com</Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
