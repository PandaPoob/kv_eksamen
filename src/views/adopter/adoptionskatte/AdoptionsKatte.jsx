import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import FilterOptions from "./FilterOptions";
import AdoptionKatteListe from "./AdoptionKatteListe";

function AdoptionsKatte({ data, sideData }) {
  const [internatFilter, setInternatFilter] = useState("");
  const [kanMedAndre, setKanMedAndre] = useState(false);
  const [miljoFilter, setMiljoFilter] = useState("");
  const [alderFilter, setAlderFilter] = useState("");

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />

      <FilterOptions
        internatFilter={internatFilter}
        setInternatFilter={setInternatFilter}
        kanMedAndre={kanMedAndre}
        setKanMedAndre={setKanMedAndre}
        setMiljoFilter={setMiljoFilter}
        setAlderFilter={setAlderFilter}
      />

      <Box
        bg="brand.lightGrey"
        display={"grid"}
        justifyContent="center"
        py={"4rem"}
      >
        <AdoptionKatteListe
          data={data}
          internatFilter={internatFilter}
          kanMedAndre={kanMedAndre}
          miljoFilter={miljoFilter}
          alderFilter={alderFilter}
        />
      </Box>
    </PageLayout>
  );
}

export default AdoptionsKatte;
