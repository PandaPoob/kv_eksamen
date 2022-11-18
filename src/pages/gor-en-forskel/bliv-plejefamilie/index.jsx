import { Box, Heading, Flex } from "@chakra-ui/react";

function BlivPlejefamiliePage({ data }) {
  // console.log(data)

  return (
    <Box>
      <Heading as={"h1"} size={"heading1"}>
        Bliv plejefamilie
      </Heading>
    </Box>
  );
}

export async function getStaticProps() {
  /*   const res = await fetch(
    "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte"
  );
  const data = await res.json(); */

  return { props: { data } };
}

export default BlivPlejefamiliePage;
