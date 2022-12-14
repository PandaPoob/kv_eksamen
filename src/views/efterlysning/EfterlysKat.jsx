import { Heading, Text, Link, Flex } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import NextLink from "next/link";

const EfterlysFormFlow = dynamic(() => import("./EfterlysFormFlow"));

function EfterlysKat() {
  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Efterlys din kat</title>
      </Head>
      <Flex
        bg="brand.lightGrey"
        pb={"4rem"}
        flexDir="column"
        alignItems="center"
        minH="100vh"
      >
        <Flex
          minH="40vh"
          flexDir="column"
          justifyContent={"center"}
          textAlign="center"
          mx={{ md: "4rem", lg: "auto" }}
          px={{ base: "1rem" }}
          py={"2rem"}
        >
          <Heading as={"h1"} size={"heading2"} mb="1rem">
            Her kan du efterlyse din kat
          </Heading>
          <Text>
            Inden du efterlyser din kat er det en god idé at tjekke vores liste
            over fundne/fremlyste katte{" "}
            <NextLink
              href={`/indberetning/fremlyste-katte`}
              passHref
              prefetch={false}
            >
              <Link variant={"inLink"}>her</Link>
            </NextLink>
          </Text>
        </Flex>
        <EfterlysFormFlow />
      </Flex>
    </PageLayout>
  );
}

export default EfterlysKat;
