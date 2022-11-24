import { Box } from "@chakra-ui/react"
import PageLayout from "../../components/layout/PageLayout"
import PageHead from "../../components/layout/PageHead"
import SplashHeader from "../../components/generics/SplashHeader"
import { useState } from "react";
import EFFilterOptions from "../../components/efterlyst+fremlyst/EFFilterOptions";
import EfterlysteKatteListe from "./EfterlysteKatteListe";

export default function EfterlysteKatte({ efterlystData, sideData }) {
  const [landsdelsfilter, setLandsdelsfilter] = useState("");
  const [kon, setKon] = useState("");
  const [maerket, setMaerket] = useState(false);
  const [chippet, setChippet] = useState(false);

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <EFFilterOptions landsdelsfilter={landsdelsfilter} setLandsdelsfilter={setLandsdelsfilter} kon={kon} setKon={setKon} maerket={maerket} setMaerket={setMaerket} chippet={chippet} setChippet={setChippet} />
      <Box bg="brand.lightGrey" display={"grid"} justifyContent="center" py={"4rem"}>
        <EfterlysteKatteListe efterlystData={efterlystData} landsdelsfilter={landsdelsfilter} kon={kon} maerket={maerket} chippet={chippet} />
      </Box>
    </PageLayout>
  );
}