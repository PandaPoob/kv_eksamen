import React from 'react'
import { Flex } from "@chakra-ui/react";
import ArticleEF from './ArticleEF';

export default function EFkatteliste({ EFdata, type, url, landsdelsfilter, kon, maerket, chippet, searchInput, setSearchInput }) {

    function filterCat(state, filterFunction, oldListData) {
        let list = [];
        list = state ? oldListData : oldListData.filter(filterFunction);
        console.log(list)
        return list;
      }
    
      let filteredEFKatte = filterCat(
        landsdelsfilter === "",
        (kat) => kat.acf.landsdel === landsdelsfilter,
        filterCat(
          !maerket,
          (kat) => kat.acf.oremaerket === "Ja",
          filterCat(
            kon === "",
            (kat) => kat.acf.kon === kon,
            filterCat(!chippet, (kat) => kat.acf.chippet === "Ja", EFdata)
          )
        )
      );

      let searchedFilteredKatte = []
      filteredEFKatte.filter((kat) => {
        if(searchInput==="") {
            searchedFilteredKatte.push(kat)
        } else if (kat.acf.by.toLowerCase().includes(searchInput.toLowerCase())) {
            searchedFilteredKatte.push(kat);
        }
        return searchedFilteredKatte;
    })
        
    
  return (
    <Flex justifyContent={"center"} flexWrap="wrap" gap={"2rem"} maxW={"container.xxl"}>
        {searchedFilteredKatte.map((kat) => {
          return <ArticleEF key={kat.id} url={url} type={type} {...kat} />;
        })}
      </Flex>
  )
}
