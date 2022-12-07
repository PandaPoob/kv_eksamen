import { Heading, Text, Link, Flex } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import Head from "next/head";
import NextLink from "next/link";
import FremlysFormFlow from "./FremlysFormFlow";

function FremlysKat() {
  return (
    <PageLayout>
      <Head>
        <title>Fremlys en kat</title>
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
        >
          <Heading as={"h1"} size={"heading2"} mb="1rem">
            Her kan du fremlyse en kat
          </Heading>
          <Text>
            Inden du fremlyser en kat er det en god idé at tjekke om der er
            nogen der allerede har efterlyst den på vores liste{" "}
            <NextLink href={`/efterlysning/efterlyste-katte`} passHref>
              <Link variant={"inLink"}>her</Link>
            </NextLink>
          </Text>
        </Flex>
        <FremlysFormFlow />
      </Flex>
    </PageLayout>
  );
}

export default FremlysKat;