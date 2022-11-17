import Image from "next/image";
import Link from "next/link";
import Article from "../../../components/generics/Article";
import { Box, Heading, Flex } from "@chakra-ui/react";

function AdoptionsKattePage({ data }) {
  // console.log(data)

  return (
    <Box>
      <Heading as={"h1"} size={"heading1"}>
        For de vilde katte
      </Heading>

      <Flex
        justifyContent={"center"}
        flexWrap="wrap"
        gap={"2rem"}
        bg="brand.lightGrey"
      >
        {data.map((kat) => {
          return <Article key={kat.id} {...kat}></Article>;
        })}
      </Flex>
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
