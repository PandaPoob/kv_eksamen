import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../api/url";
import Samarbejdspartnere from "../../views/samarbejdspartnere";

function SamarbejdspartnerePage({ sideData }) {
  return <Samarbejdspartnere sideData={sideData} />;
}
export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1749`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default SamarbejdspartnerePage;
