import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import SplashHeader from "../components/generics/SplashHeader";

export default function Home({data}) {
  console.log(data);
  return (
    <Box>
      {/* <SplashHeader/> */}
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
      <Flex>
        <NextLink href={`/`} passHref legacyBehavior>
          <Link variant={"redBtn"}>Red button</Link>
        </NextLink>
        <NextLink href={`/`} passHref legacyBehavior>
          <Link variant={"blueBtn"}>Blue button</Link>
        </NextLink>
      </Flex>
    </Box>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://www.pandapoob.com/kea/17_finalexam/kv_database/forside");
//   const data = await res.json();

//   return { props: { data } };
// }