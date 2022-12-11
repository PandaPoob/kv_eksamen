import { Box, Flex } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PersonArticle from "../../../components/articles/PersonArticle";
import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";

function Medarbejderne({ data, sideData }) {
  let copySortedMedarbejdere = JSON.parse(JSON.stringify(data));
  const sortedM = copySortedMedarbejdere.sort((a, b) =>
    a.acf.navn.localeCompare(b.acf.navn)
  );

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader
        imgMobPos={"15%"}
        h1mobsize={"heading2"}
        {...sideData}
      ></SplashHeader>

      <Box display={"grid"} justifyContent={"center"}>
        <Flex
          justify={"center"}
          columnGap={"2rem"}
          flexWrap={"wrap"}
          pt="5rem"
          maxW={"container.xxl"}
        >
          {sortedM.map((m) => {
            return (
              <PersonArticle
                boxshadow={"1px 2px 6px 1px #B8B8B8"}
                key={m.id}
                {...m}
              ></PersonArticle>
            );
          })}
        </Flex>
      </Box>
    </PageLayout>
  );
}

export default Medarbejderne;
