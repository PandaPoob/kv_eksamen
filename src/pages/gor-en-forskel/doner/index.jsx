import { Box, Heading, Flex } from "@chakra-ui/react";
import Doner from "../../../views/doner/Doner";
import url from "../../../api/url";

function DonerPage({ data, sideData }) {

  return (
      <Doner data={data} sideData={sideData}/>
  );
}

export async function getStaticProps() {
   const res = await fetch(`${url}belobmuligheder`);
  const data = await res.json(); 
  const res2 = await fetch(`${url}indholdsider/1377`)
  const sideData = await res2.json()

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default DonerPage;
