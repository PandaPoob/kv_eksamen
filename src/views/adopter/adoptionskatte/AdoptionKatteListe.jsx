import { Flex } from "@chakra-ui/react";
import Article from "../../../components/generics/Article";

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

  /*   //let internatFilteredKatte = [];
  let internatFilteredKatte = filterCat(
    internatFilter === "",
    (kat) => kat.acf.internat === internatFilter,
    data
  );

  //let kanMedAndreKatte = [];
  let kanMedAndreKatte = filterCat(
    !kanMedAndre,
    (kat) => kat.acf.kan_med_andre_katte === "Ja",
    internatFilteredKatte
  );

  //let miljoFilteredKatte = [];
  let miljoFilteredKatte = filterCat(
    miljoFilter === "",
    (kat) => kat.acf.miljo === miljoFilter,
    kanMedAndreKatte
  );

  //let filteredKatte = [];
  let filteredKatte = filterCat(
    alderFilter === "",
    (kat) => kat.acf.alder === alderFilter,
    miljoFilteredKatte
  ); */

  return (
    <Flex
      justifyContent={"center"}
      flexWrap="wrap"
      gap={"2rem"}
      maxW={"container.xxl"}
    >
      {filteredKatte.map((kat) => {
        return <Article key={kat.id} {...kat}></Article>;
      })}
    </Flex>
  );
}

export default AdoptionKatteListe;
