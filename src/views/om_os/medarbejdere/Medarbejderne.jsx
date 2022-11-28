import { Box, Flex, Heading } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PersonArticle from "../../../components/generics/PersonArticle";
import SplashHeader from "../../../components/generics/SplashHeader";

function Medarbejderne({ data, sideData }) {
  return (
    <PageLayout>
      <SplashHeader {...sideData}></SplashHeader>
      <Box py="4rem" bgColor={"lightYellow"}>
        <Heading as="h2" size={"heading2"} textAlign="center">
          Teamet bag Kattens Værn
        </Heading>
      </Box>
      <Box bgColor="brand.lightGrey" display={"grid"} justifyContent={"center"}>
        <Flex
          justify={"center"}
          columnGap={"2rem"}
          flexWrap={"wrap"}
          pt="2.5rem"
          maxW={"container.xxl"}
        >
          {data.map((m) => {
            return <PersonArticle key={m.id} {...m}></PersonArticle>;
          })}
        </Flex>
      </Box>
    </PageLayout>
  );
}

export default Medarbejderne;
