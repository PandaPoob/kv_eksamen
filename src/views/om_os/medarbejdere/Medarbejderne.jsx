import { Box } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PersonArticle from "../../../components/articles/PersonArticle";
import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";
import GridLayout from "../../../components/layout/GridLayout";

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
      <Box py="2rem">
        <GridLayout>
          {sortedM.map((m) => {
            return (
              <PersonArticle
                boxshadow={"1px 2px 6px 1px #B8B8B8"}
                key={m.id}
                {...m}
              ></PersonArticle>
            );
          })}
        </GridLayout>
      </Box>
    </PageLayout>
  );
}

export default Medarbejderne;
