import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../../api/url";
import FremlysteKatte from "../../../views/fremlystekatte/FremlysteKatte";

function FremlysteKattePage({ fremlystData, sideData }) {

  return (
    <FremlysteKatte fremlystData={fremlystData} sideData={sideData}/>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}fremlystekatte`);
  const fremlystData = await res.json(); 
  const res2 = await fetch(`${url}indholdsider/544`);
  const sideData = await res2.json();

   return {
     props: {
       fremlystData: fremlystData,
       sideData: sideData,
     },
   };
}

export default FremlysteKattePage;

