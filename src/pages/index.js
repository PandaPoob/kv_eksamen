import { Box, Heading, Text, Button, Flex, Link, Grid, GridItem } from "@chakra-ui/react";
import url from "../api/url";
import PageHead from "../components/layout/PageHead";
import SelectedCatArticle from "../views/forside/SelectedCatArticle";
import ForsideSplash from "../views/forside/ForsideSplash";
import MaanedensKatte from "../views/forside/MaanedensKatte";
import VoresArbejde from "../views/forside/VoresArbejde";
import NyhedsSektion from "../views/forside/NyhedsSektion";
import PageLayout from "../components/layout/PageLayout";

function Home({sideData, katteData, nyhedsData}) {

  
  return (
    <PageLayout>
      <Box>
        <PageHead {...sideData} />
        <ForsideSplash {...sideData} />
          <VoresArbejde />
          <NyhedsSektion nyhedsData={nyhedsData} />
          <MaanedensKatte katteData={katteData} />
      </Box>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/165`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}adoptionskatte`);
  const katteData = await res2.json();
  const res3 = await fetch(`${url}nyhedsartikler`);
  const nyhedsData = await res3.json();

  return {
    props: {
      sideData: sideData,
      katteData: katteData,
      nyhedsData: nyhedsData,
    },
  };
}

export default Home;