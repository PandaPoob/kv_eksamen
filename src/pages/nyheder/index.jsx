import { Box, Flex } from "@chakra-ui/react";
import NewsArticle from "../../components/generics/NewsArticle";
import url from "../../api/url";
import PageLayout from "../../components/layout/PageLayout";

export default function Nyheder({nyhedsData}){
    return (
      <PageLayout>
        <Box>
          <Flex justify={"center"} flexWrap="wrap" gap="1rem">
            {nyhedsData.map((artikel, i) => (
              <NewsArticle key={artikel.id} id={artikel.id} {...artikel} />
            ))}
          </Flex>
        </Box>
      </PageLayout>
    );
}

export async function getStaticProps(){
const res = await fetch(`${url}nyhedsartikler`);
  const nyhedsData = await res.json();

  return {
    props: {
      nyhedsData: nyhedsData,
    },
  };
}