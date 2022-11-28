import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../../api/url";
import Hovedsponsorer from "../../../views/sponsorer/Hovedsponsorer";
import Sponsorer from "../../../views/sponsorer/Sponsorer";

function StotFastpage({ data, sideData }) {
  return  <Box>
  <Heading as={"h1"} size={"heading1"}>
    Støt fast
  </Heading>
</Box>;
}

/* export async function getStaticProps() {
  const res = await fetch(`${url}sponsorer?per_page`);
  const data = await res.json();

  const res2 = await fetch(`${url}indholdsider/454`);
  const sideData = await res2.json();

  return { props: { data: data, sideData: sideData } };
} */

export default StotFastpage;
