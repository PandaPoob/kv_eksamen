import {
  Flex,
  useBreakpointValue,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import dynamic from "next/dynamic";
import InternatFilter from "./InternatFilter";
import KanMedAndreCheck from "./KanMedAndreCheck";
import MiljoFilter from "./MiljoFilter";
import AlderFilter from "./AlderFilter";

const MobileFilterDrawer = dynamic(() => import("./FilterDrawer"), {
  ssr: false,
});

function FilterOptions({
  internatFilter,
  setInternatFilter,
  kanMedAndre,
  setKanMedAndre,
  setMiljoFilter,
  setAlderFilter,
}) {
  const isMobile = useBreakpointValue({ base: true, navbp: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  //filteroption data hardcoded
  const miljoOpt = [
    {
      value: "Indekat",
    },

    {
      value: "Udekat",
    },
  ];

  const internatOpt = [
    {
      value: "Aalborg",
    },

    {
      value: "Billund",
    },
    {
      value: "Brøndby",
    },

    {
      value: "Slagelse",
    },
  ];

  const alderOpt = [
    {
      value: "Killing",
    },

    {
      value: "Ungkat",
    },

    {
      value: "Voksen",
    },

    {
      value: "Senior",
    },
  ];

  return (
    <Flex
      justify={{ base: "flex-end", navbp: "space-between" }}
      maxW={"container.xxl"}
      mx={"auto"}
      minH={"10vh"}
    >
      {isMobile ? (
        <>
          <Button
            onClick={onOpen}
            aria-label="Open menu"
            color={"brand.blue"}
            bg="none"
            fontSize={"sm"}
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            alignSelf={"center"}
          >
            Filter
            <BsChevronRight size={24} />
          </Button>
          <MobileFilterDrawer
            isOpen={isOpen}
            onClose={onClose}
            miljoOpt={miljoOpt}
            internatOpt={internatOpt}
            alderOpt={alderOpt}
            setInternatFilter={setInternatFilter}
            setKanMedAndre={setKanMedAndre}
            setMiljoFilter={setMiljoFilter}
            setAlderFilter={setAlderFilter}
            kanMedAndre={kanMedAndre}
          />
        </>
      ) : (
        <>
          <InternatFilter
            internatFilter={internatFilter}
            setInternatFilter={setInternatFilter}
            internatOpt={internatOpt}
          />
          <Flex gap={"2rem"} alignItems={"center"}>
            <KanMedAndreCheck
              kanMedAndre={kanMedAndre}
              setKanMedAndre={setKanMedAndre}
            />
            <MiljoFilter setMiljoFilter={setMiljoFilter} miljoOpt={miljoOpt} />
            <AlderFilter setAlderFilter={setAlderFilter} alderOpt={alderOpt} />
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default FilterOptions;
