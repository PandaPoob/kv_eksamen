import { Box, Heading, Flex } from "@chakra-ui/react";
import Doner from "../../../views/doner/Doner";

function DonerPage({ data }) {
   

  return (
    <Box>
      <Heading as={"h1"} size={"heading1"}>
        Doner til kattene
      </Heading>
      <Doner data={data}/>
    </Box>
  );
}

export async function getStaticProps() {
   const res = await fetch(
    "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/belobmuligheder"
  );
  const data = await res.json(); 

  return { props: { data } };
}

export default DonerPage;
