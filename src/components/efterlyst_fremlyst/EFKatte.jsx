import { Box } from "@chakra-ui/react";
import PageLayout from "../layout/PageLayout";
import PageHead from "../layout/PageHead";
import SplashHeader from "../generics/SplashHeader";
import { useState } from "react";
import EFFilterOptions from "./EFFilterOptions";
import EFkatteliste from "./EFkatteliste";

export default function EFKatte({ EFdata, sideData, url, type, imgMobilePos }) {
  const [landsdelsfilter, setLandsdelsfilter] = useState("");
  const [kon, setKon] = useState("");
  const [maerket, setMaerket] = useState(false);
  const [chippet, setChippet] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} imgMobPos={imgMobilePos} />
      <EFFilterOptions
        landsdelsfilter={landsdelsfilter}
        setLandsdelsfilter={setLandsdelsfilter}
        kon={kon}
        setKon={setKon}
        maerket={maerket}
        setMaerket={setMaerket}
        chippet={chippet}
        setChippet={setChippet}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Box
        bg="brand.lightGrey"
        display={"grid"}
        justifyContent="center"
        py={"4rem"}
      >
        <EFkatteliste
          EFdata={EFdata}
          url={url}
          type={type}
          landsdelsfilter={landsdelsfilter}
          kon={kon}
          maerket={maerket}
          chippet={chippet}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </Box>
    </PageLayout>
  );
}
