import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import url from "../api/url";
import PageHead from "../components/layout/PageHead";


function Home({data}) {
  console.log(data);
  return (
    <Box>
      <PageHead {...data}/>
      <Box position="relative" height={"90vh"} width={"100vw"} overflow="hidden">
        <Image src={data.acf.splashbillede} alt="test-image" layout="fill" objectFit="cover" />
        <Box position="absolute" top={"0"} left={["0", "0", "0", "50%", "50%"]} width={["100%", "100%", "100%", "50%", "50%"]} height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex width={["100%", "100%", "100%", "50%", "50%"]} position="absolute" left={["0", "0", "0", "50%", "50%"]} top="30%" align={"center"} justify="center" direction={"column"} color="brand.white">
          <Heading as={"h1"}>{data.acf.overskrift}</Heading>
          <Text>{data.acf.undertekst}</Text>
          <NextLink href={""} passHref legacyBehavior>
            <Link variant={"blueBtn"}>{""}</Link>
          </NextLink>
        </Flex>
      </Box>
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

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/165`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Home;