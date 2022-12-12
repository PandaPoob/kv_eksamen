import PageLayout from "../../../../components/layout/PageLayout";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";

function IndberetningTest() {
  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favikon.ico" />
        <title>Indberetningstest</title>
      </Head>
      <Box py="4rem" display="grid" justifyContent="center">
        <Heading as="h1" size="heading1">
          Test kommer snart...
        </Heading>
      </Box>
    </PageLayout>
  );
}

export default IndberetningTest;
