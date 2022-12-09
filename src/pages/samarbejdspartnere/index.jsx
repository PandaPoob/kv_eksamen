import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../api/url";

function SamarbejdspartnerePage({ sideData }) {
  return <Box mt={"6rem"}>Samarbejdspartnere</Box>;
}

/* export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1111`);
  const sideData = await res.json();

  return {
    props: {
      sideData: sideData,
    },
  };
} */
export default SamarbejdspartnerePage;
