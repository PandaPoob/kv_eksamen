import { Box, Heading, Flex } from "@chakra-ui/react";
import Article from "../../../components/generics/Article";

function AdoptionsKattePage({ data }) {
  return (
    <Box>
      <Heading as={"h1"} size={"heading1"}>
        For de vilde katte
      </Heading>
      <Box
        bg="brand.lightGrey"
        display={"grid"}
        justifyContent="center"
        py={"9.375rem"}
      >
        <Flex
          justifyContent={"center"}
          flexWrap="wrap"
          gap={"2rem"}
          maxW={"container.xxl"}
        >
          {data.map((kat) => {
            return <Article key={kat.id} {...kat}></Article>;
          })}
        </Flex>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte"
  );
  const data = await res.json();

  return { props: { data } };
}

export default AdoptionsKattePage;
