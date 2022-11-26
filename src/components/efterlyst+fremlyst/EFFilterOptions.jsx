import { Flex, useBreakpointValue, Button, useDisclosure } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import dynamic from "next/dynamic";
import LandsdelFilter from "./LandsdelFilter";
import KonFilter from "./KonFilter";
import OremaerkeCheck from "./OremaerkeCheck";
import ChippetCheck from "./ChippetCheck";
import SearchBar from "./SearchBar";


const MobileFilterDrawer = dynamic(() => import("./EFFilterDrawer"), {
  ssr: false,
});

function EFFilterOptions({ landsdelsfilter, setLandsdelsfilter, kon, setKon, maerket, setMaerket, chippet, setChippet, setSearchInput, searchInput }) {
  const isMobile = useBreakpointValue({ base: true, navbp: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Flex justify={{ base: "space-between", navbp: "space-between" }} alignItems="center" maxW={"container.xxl"} px="1rem" mx={"auto"} minH={"10vh"}>
      {isMobile ? (
        <>
          <SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
          <Button onClick={onOpen} aria-label="Open menu" color={"brand.blue"} bg="none" fontSize={"sm"} _hover={{ bg: "none" }} _focus={{ bg: "none" }} alignSelf={"center"}>
            Filter
            <BsChevronRight size={24} />
          </Button>
          <MobileFilterDrawer
            isOpen={isOpen}
            onClose={onClose}
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
        </>
      ) : (
        <>
          <Flex align={"center"} gap="1rem" px="1rem">
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
            <LandsdelFilter landsdelsfilter={landsdelsfilter} setLandsdelsfilter={setLandsdelsfilter} landsdelOpt={landsdelOpt} />
            <KonFilter kon={kon} setKon={setKon} konOpt={konOpt} />
            <Flex justifyContent={"flex-end"} align="flex-end">
              <OremaerkeCheck maerket={maerket} setMaerket={setMaerket} />
              <ChippetCheck chippet={chippet} setChippet={setChippet} />
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default EFFilterOptions;
