import Head from "next/head";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Heading as="h1" size="heading1">
        heading1
      </Heading>
      <Heading as="h2" size="heading2">
        heading2
      </Heading>
      <Heading as="h3" size="heading3">
        heading3
      </Heading>
      <Heading as="h4" size="heading4">
        heading4
      </Heading>
      <Text fontSize={"xxs"}>xxs tekst</Text>
      <Text fontSize={"xs"}>xs tekst</Text>
      <Text fontSize={"sm"}>small tekst</Text>
      <Text fontSize={"md"}>medium tekst</Text>
      <Text fontSize={"lg"}>large tekst</Text>
      <Text fontSize={"xl"}>xlarge tekst</Text>
    </Box>
  );
}
