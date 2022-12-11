import {
  Flex,
  useBreakpointValue,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSliders } from "react-icons/bs";
import dynamic from "next/dynamic";
import { useState } from "react";
import LandsdelFilter from "./LandsdelFilter";
import KonFilter from "./KonFilter";
import OremaerkeCheck from "./OremaerkeCheck";
import ChippetCheck from "./ChippetCheck";
import SearchBar from "./SearchBar";

const MobileFilterDrawer = dynamic(() => import("./EFFilterDrawer"), {
  ssr: false,
});

function EFFilterOptions({
  landsdelsfilter,
  setLandsdelsfilter,
  kon,
  setKon,
  maerket,
  setMaerket,
  chippet,
  setChippet,
  setSearchInput,
  searchInput,
}) {
  const isMobile = useBreakpointValue({ base: true, navbp: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoaded, setIsLoaded] = useState(false);
  //filteroption data hardcoded
  const landsdelOpt = [
    {
      value: "København og omegn",
    },
    {
      value: "Sjælland og øerne",
    },
    {
      value: "Fyn og øerne",
    },
    {
      value: "Sønderjylland",
    },
    {
      value: "Midtjylland",
    },
    {
      value: "Nordjylland",
    },
    {
      value: "Bornholm",
    },
    {
      value: "Udlandet",
    },
  ];

  const konOpt = [
    {
      value: "Hunkat",
    },

    {
      value: "Hankat",
    },
  ];

  return (
    <Flex
      justify={{ base: "space-between", navbp: "space-between" }}
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems={{ md: "center" }}
      maxW={"container.xxl"}
      px={{ base: "1rem", navbp: "2rem" }}
      py={{ base: "1rem", navbp: "0" }}
      mx={"auto"}
      minH={{ base: "10vh", navbp: "16vh" }}
    >
      {isMobile ? (
        <>
          <SearchBar
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
          <Button
            variant={"openFilter"}
            onClick={() => {
              setIsLoaded(true);
              onOpen();
            }}
            aria-label="Open menu"
            gap="2rem"
            mb={{ base: "1rem", md: "0" }}
            alignSelf={{ base: "flex-end", md: "unset" }}
          >
            Filter
            <BsSliders size={20} />
          </Button>
          {isLoaded && (
            <MobileFilterDrawer
              isOpen={isOpen}
              onClose={onClose}
              onCloseComplete={() => {
                setIsLoaded(false);
              }}
              landsdelOpt={landsdelOpt}
              konOpt={konOpt}
              landsdelsfilter={landsdelsfilter}
              setLandsdelsfilter={setLandsdelsfilter}
              kon={kon}
              setKon={setKon}
              maerket={maerket}
              setMaerket={setMaerket}
              chippet={chippet}
              setChippet={setChippet}
            />
          )}
        </>
      ) : (
        <>
          <SearchBar
            justifySelf="flex-start"
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
          <Flex
            align={"center"}
            justifyContent="space-between"
            gap="2rem"
            px="1rem"
          >
            <Flex gap={"1rem"}>
              <OremaerkeCheck maerket={maerket} setMaerket={setMaerket} />
              <ChippetCheck chippet={chippet} setChippet={setChippet} />
            </Flex>
            <Flex gap={"1rem"}>
              <LandsdelFilter
                landsdelsfilter={landsdelsfilter}
                setLandsdelsfilter={setLandsdelsfilter}
                landsdelOpt={landsdelOpt}
              />
              <KonFilter kon={kon} setKon={setKon} konOpt={konOpt} />
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default EFFilterOptions;
