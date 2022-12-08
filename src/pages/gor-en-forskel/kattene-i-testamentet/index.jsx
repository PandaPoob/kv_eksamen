import { Box, Heading, Flex } from "@chakra-ui/react";
import KatteneITestamentet from "../../../views/kattene-i-testamentet/KatteneITestamentet";
import url from "../../../api/url";

function TestamentePage({ sideData, imgData }) {
  return <KatteneITestamentet sideData={sideData} imgData={imgData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1395`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}indholdsbilleder/1392`);
  const imgData = await res2.json();

  return {
    props: {
      sideData: sideData,
      imgData: imgData,
    },
  };
}
export default TestamentePage;
