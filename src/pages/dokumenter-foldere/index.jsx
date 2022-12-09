import { Box, Heading, Flex } from "@chakra-ui/react";
import url from "../../api/url";

function DokumenterFolderePage({ sideData }) {
  return <Box mt={"6rem"}>Dokumenter og foldere</Box>;
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
export default DokumenterFolderePage;
