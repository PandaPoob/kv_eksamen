import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../../api/url";
import EfterlysteKatte from "../../../views/efterlystekatte/EfterlysteKatte";

function EfterlysteKattePage({ efterlystData, sideData }) {

  return (
    <EfterlysteKatte efterlystData={efterlystData} sideData={sideData}/>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}efterlystekatte`);
  const efterlystData = await res.json(); 
  const res2 = await fetch(`${url}indholdsider/328`);
  const sideData = await res2.json();

   return {
     props: {
       efterlystData: efterlystData,
       sideData: sideData,
     },
   };
}

export default EfterlysteKattePage;
