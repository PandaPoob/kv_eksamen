import { Box, Flex, Heading } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PersonArticle from "../../../components/generics/PersonArticle";
import SplashHeader from "../../../components/generics/SplashHeader";

function Medarbejderne({ data, sideData }) {
  let copySortedMedarbejdere = JSON.parse(JSON.stringify(data));
  const sortedM = copySortedMedarbejdere.sort((a, b) =>
    a.acf.navn.localeCompare(b.acf.navn)
  );

  return (
    <PageLayout>
      <SplashHeader {...sideData}></SplashHeader>

      <Box bgColor="brand.lightGrey" display={"grid"} justifyContent={"center"}>
        <Flex
          justify={"center"}
          columnGap={"2rem"}
          flexWrap={"wrap"}
          pt="5rem"
          maxW={"container.xxl"}
        >
          {sortedM.map((m) => {
            return <PersonArticle key={m.id} {...m}></PersonArticle>;
          })}
        </Flex>
      </Box>
    </PageLayout>
  );
}

export default Medarbejderne;
