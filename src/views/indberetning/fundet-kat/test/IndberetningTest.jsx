import PageLayout from "../../../../components/layout/PageLayout";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";

function IndberetningTest() {
  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favikon.ico" />
        <title>Indberetningstest</title>
        <meta
          name="description"
          content="Her kan du efterlyse en kat, hvis du har mistet den."
        />
      </Head>
      <Box py="4rem" px="1rem" display="grid" justifyContent="center">
        <Heading as="h1" size="heading1">
          Test kommer snart...
        </Heading>
      </Box>
    </PageLayout>
  );
}

export default IndberetningTest;
