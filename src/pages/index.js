import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import url from "../api/url";
import PageHead from "../components/layout/PageHead";


function Home({sideData, katteData}) {

  let maanedensKatte = katteData.filter(e => {
    return e.acf.udvalgt === true;
  })

  console.log(maanedensKatte);
  
  return (
    <Box>
      <PageHead {...sideData} />
      <Box position="relative" height={"90vh"} width={"100vw"} overflow="hidden">
        <Image src={sideData.acf.splashbillede} alt="test-image" layout="fill" objectFit="cover" />
        <Box position="absolute" top={"0"} left={["0", "0", "0", "50%", "50%"]} width={["100%", "100%", "100%", "50%", "50%"]} height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex width={["100%", "100%", "100%", "50%", "50%"]} position="absolute" left={["0", "0", "0", "50%", "50%"]} top="30%" align={"center"} justify="center" direction={"column"} color="brand.white">
          <Heading as={"h1"}>{sideData.acf.overskrift}</Heading>
          <Text>{sideData.acf.undertekst}</Text>
          <NextLink href={""} passHref legacyBehavior>
            <Link variant={"blueBtn"}>{""}</Link>
          </NextLink>
        </Flex>
      </Box>
      <Box>
        <Heading as="h2" size={"heading2"}>
          Månedens katte
        </Heading>
        <Text>Månedens katte er katte som har særligt udmærket sig i løbet af den forhenværende måned.</Text>
        {maanedensKatte.map((e, i) => (
          <Image key={i} src={e.acf.profil_billede} alt={e.acf.navn} width="400px" height={"240px"} />
        ))}
        {/* <Stack>
          <Image />
          <Box></Box>
          <Image />
        </Stack> */}
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/165`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}adoptionskatte`);
  const katteData = await res2.json();

  return {
    props: {
      sideData: sideData,
      katteData: katteData,
    },
  };
}

export default Home;