import {
  Flex,
  useBreakpointValue,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSliders } from "react-icons/bs";
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
      alignItems="center"
      maxW={"container.xxl"}
      px={{ base: "1rem", navbp: "2rem" }}
      mx={"auto"}
      minH={{ base: "10vh", navbp: "16vh" }}
    >
      {isMobile ? (
        <>
          <Button
            variant={"openFilter"}
            onClick={onOpen}
            aria-label="Open menu"
            gap="2rem"
          >
            Filter
            <BsSliders size={20} />
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
