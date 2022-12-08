import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../../api/url";
import PraktiskInfo from "../../../views/adopter/praktisk-info/PraktiskInfo";
function PraktiskInfoPage({ sideData, articleData, imgData }) {
  let adoptArticles = articleData.filter((a) => {
    return a.acf.adoption === true;
  });

  return (
    <PraktiskInfo
      sideData={sideData}
      articleData={adoptArticles}
      imgData={imgData}
    />
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1507`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}infoartikler?per_page`);
  const articleData = await res2.json();
  const res3 = await fetch(`${url}indholdsbilleder/1509`);
  const imgData = await res3.json();

  return {
    props: {
      sideData: sideData,
      articleData: articleData,
      imgData: imgData,
    },
  };
}
export default PraktiskInfoPage;
