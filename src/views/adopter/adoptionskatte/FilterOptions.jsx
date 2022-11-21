import { Flex } from "@chakra-ui/react";
import InternatFilter from "./InternatFilter";
import KanMedAndreCheck from "./KanMedAndreCheck";
import MiljoFilter from "./MiljoFilter";
import AlderFilter from "./AlderFilter";

function FilterOptions({
  internatFilter,
  setInternatFilter,
  kanMedAndre,
  setKanMedAndre,
  setMiljoFilter,
  setAlderFilter,
}) {
  return (
    <Flex
      justify={"space-between"}
      maxW={"container.xxl"}
      mx={"auto"}
      minH={"10vh"}
    >
      <InternatFilter
        internatFilter={internatFilter}
        setInternatFilter={setInternatFilter}
      />
      <Flex gap={"2rem"} alignItems={"center"}>
        <KanMedAndreCheck
          kanMedAndre={kanMedAndre}
          setKanMedAndre={setKanMedAndre}
        />
        <MiljoFilter setMiljoFilter={setMiljoFilter} />
        <AlderFilter setAlderFilter={setAlderFilter} />
      </Flex>
    </Flex>
  );
}

export default FilterOptions;
