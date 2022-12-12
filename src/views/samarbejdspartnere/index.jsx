import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";

function Samarbejdspartnere({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"25%"} {...sideData} />
      <Box py="4rem" px="1rem" display="grid" justifyContent="center">
        <Heading as="h2" size="heading2">
          Samarbejdspartnere kommer snart...
        </Heading>
      </Box>
    </PageLayout>
  );
}

export default Samarbejdspartnere;
