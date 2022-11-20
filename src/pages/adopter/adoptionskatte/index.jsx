import Image from "next/image";
import Link from "next/link";
import Article from "../../../components/generics/Article";
import { Box, Heading, Flex } from "@chakra-ui/react";
import SplashHeader from "../../../components/generics/SplashHeader";

function AdoptionsKattePage({ data, sideData }) {
  console.log(sideData)

  return (
    <Box>
      <SplashHeader {...sideData} />
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
  const res2 = await fetch("https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/indholdsider/166");
  const sideData = await res2.json()

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default AdoptionsKattePage;
