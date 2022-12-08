import React from "react";
import { Flex } from "@chakra-ui/react";
import ArticleEF from "../articles/ArticleEF";
import GridLayout from "../layout/GridLayout";

export default function EFkatteliste({
  EFdata,
  type,
  url,
  landsdelsfilter,
  kon,
  maerket,
  chippet,
  searchInput,
  setSearchInput,
}) {
  function filterCat(state, filterFunction, oldListData) {
    let list = [];
    list = state ? oldListData : oldListData.filter(filterFunction);
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

  let searchedFilteredKatte = [];
  filteredEFKatte.filter((kat) => {
    if (searchInput === "") {
      searchedFilteredKatte.push(kat);
    } else if (kat.acf.by.toLowerCase().includes(searchInput.toLowerCase())) {
      searchedFilteredKatte.push(kat);
    } else if (
      kat.acf.chipnr !== undefined &&
      kat.acf.chipnr.length !== 0 &&
      kat.acf.chipnr.includes(searchInput)
    ) {
      searchedFilteredKatte.push(kat);
    } else if (
      kat.acf.oremaerkenr !== undefined &&
      kat.acf.oremaerkenr.length !== 0 &&
      kat.acf.oremaerkenr.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      searchedFilteredKatte.push(kat);
    }
    return searchedFilteredKatte;
  });

  return (
    <GridLayout>
      {searchedFilteredKatte.map((kat) => {
        return <ArticleEF key={kat.id} url={url} type={type} {...kat} />;
      })}
    </GridLayout>
  );
}
