import { Box, Heading, Flex } from "@chakra-ui/react";

import Article from "../../../components/generics/Article";
import url from "../../../api/url";

import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";

function AdoptionsKattePage({ data, sideData }) {


  return (
    <Box>
      <PageHead {...sideData}/>
      <SplashHeader {...sideData} />
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
  const res = await fetch(`${url}adoptionskatte`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/166`);
  const sideData = await res2.json()

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default AdoptionsKattePage;
