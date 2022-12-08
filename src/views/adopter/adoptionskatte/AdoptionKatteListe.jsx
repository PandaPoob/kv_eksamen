import { Flex } from "@chakra-ui/react";
import Article from "../../../components/articles/Article";
import GridLayout from "../../../components/layout/GridLayout";

function AdoptionKatteListe({
  data,
  internatFilter,
  kanMedAndre,
  miljoFilter,
  alderFilter,
}) {
  function filterCat(state, filterFunction, oldListData) {
    let list = [];
    list = state ? oldListData : oldListData.filter(filterFunction);
    return list;
  }

  let filteredKatte = filterCat(
    internatFilter === "",
    (kat) => kat.acf.internat === internatFilter,
    filterCat(
      !kanMedAndre,
      (kat) => kat.acf.kan_med_andre_katte === "Ja",
      filterCat(
        miljoFilter === "",
        (kat) => kat.acf.miljo === miljoFilter,
        filterCat(
          alderFilter === "",
          (kat) => kat.acf.alder === alderFilter,
          data
        )
      )
    )
  );

  return (
    <GridLayout>
      {filteredKatte.map((kat) => {
        return <Article key={kat.id} {...kat}></Article>;
      })}
    </GridLayout>
  );
}

export default AdoptionKatteListe;
