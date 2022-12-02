import { Box, Heading, Flex } from "@chakra-ui/react";
import InternaterIndhold from "../../../views/internater/InternaterIndhold";
import url from "../../../api/url";

function InternaterPage({ sideData, internatData }) {
  // console.log(data)

  return (
    <InternaterIndhold sideData={sideData} internatData={internatData}/>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}internater/`);
  const internatData = await res.json();
  const res2 = await fetch(`${url}indholdsider/1339`);
  const sideData = await res2.json();

  return {
    props: {
      internatData: internatData,
      sideData: sideData,
    },
  };
}
export default InternaterPage;
