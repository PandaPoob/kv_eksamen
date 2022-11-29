import { Box, Heading, Flex } from "@chakra-ui/react";
import StøttemulighederIndhold from "../../views/støttemuligheder/StøttemulighederIndhold";
import url from "../../api/url";

function StottemulighederPage({ sideData }) {
  // console.log(data)

  return (
    <StøttemulighederIndhold sideData={sideData}/>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1111`);
  const sideData = await res.json();

  return {
    props: {
      sideData: sideData,
    },
  };
}
export default StottemulighederPage;
