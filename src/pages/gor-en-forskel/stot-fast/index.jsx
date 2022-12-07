import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../../api/url";
import Hovedsponsorer from "../../../views/sponsorer/Hovedsponsorer";
import Sponsorer from "../../../views/sponsorer/Sponsorer";
import StotFast from "../../../views/stot-fast/StotFast";

function StotFastpage({ data, sideData }) {
  return  <StotFast data={data} sideData={sideData}/>
}

export async function getStaticProps() {
  const res = await fetch(`${url}belobmuligheder`);
 const data = await res.json(); 
 const res2 = await fetch(`${url}indholdsider/1378`)
 const sideData = await res2.json()

 return {
   props: {
     data: data,
     sideData: sideData,
   },
 };
}

export default StotFastpage;
