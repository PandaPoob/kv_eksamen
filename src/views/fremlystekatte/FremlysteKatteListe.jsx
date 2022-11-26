import React from 'react'
import { Flex } from "@chakra-ui/react";
import ArticleEF from "../../components/efterlyst+fremlyst/ArticleEF";

export default function FremlysteKatteListe({ fremlystData, landsdelsfilter, kon, maerket, chippet }) {

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
            filterCat(!chippet, (kat) => kat.acf.chippet === "Ja", fremlystData)
          )
        )
      );

  return (
    <Flex justifyContent={"center"} flexWrap="wrap" gap={"2rem"} maxW={"container.xxl"}>
        {filteredEfterlysteKatte.map((kat) => {
          return <ArticleEF key={kat.id} url="/indberetning/fremlyste-katte/" overtitel="Kat fundet ved" {...kat} />;
        })}
      </Flex>
  )
}
