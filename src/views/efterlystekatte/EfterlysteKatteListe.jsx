import { Flex } from "@chakra-ui/react";
import ArticleEF from "../../components/generics/ArticleEF";

export default function EfterlysteKatteListe({ efterlystData, landsdelsfilter, kon, maerket, chippet }) {
  
  function filterCat(state, filterFunction, oldListData) {
    let list = [];
    list = state ? oldListData : oldListData.filter(filterFunction);
    console.log(list)
    return list;
  }

  let filteredEfterlysteKatte = filterCat(
    landsdelsfilter === "",
    (kat) => kat.acf.landsdel === landsdelsfilter,
    filterCat(
      !maerket,
      (kat) => kat.acf.oremaerket === "Ja",
      filterCat(
        kon === "",
        (kat) => kat.acf.kon === kon,
        filterCat(!chippet, (kat) => kat.acf.chippet === "Ja", efterlystData)
      )
    )
  );
  
    return (
      <Flex justifyContent={"center"} flexWrap="wrap" gap={"2rem"} maxW={"container.xxl"}>
        {filteredEfterlysteKatte.map((kat) => {
          return <ArticleEF key={kat.id} url="/efterlysning/efterlyste-katte/" overtitel="Kat forsvundet fra" {...kat} />;
        })}
      </Flex>
    );
}