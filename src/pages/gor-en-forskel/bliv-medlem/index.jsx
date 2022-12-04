import { Box, Heading, Flex } from "@chakra-ui/react";
import BlivMedlem from "../../../views/bliv-medlem/BlivMedlem";
import url from "../../../api/url";

function BlivMedlemPage({ sideData }) {
  // console.log(data)

  return (
    <BlivMedlem sideData={sideData}/>
  );
}

export async function getStaticProps() {
 const res2 = await fetch(`${url}indholdsider/1379`)
 const sideData = await res2.json()

 return {
   props: {
     sideData: sideData,
   },
 };
}
export default BlivMedlemPage;
