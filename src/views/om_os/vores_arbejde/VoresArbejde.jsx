import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import { Box, Heading, Flex } from "@chakra-ui/react";

function VoresArbejde({ sideData }) {
  return (
    <PageLayout>
      <SplashHeader {...sideData}></SplashHeader>

      <Box bgColor="brand.lightGrey" display={"grid"} justifyContent={"center"}>
        <Flex>mty</Flex>
      </Box>
    </PageLayout>
  );
}

export default VoresArbejde;
