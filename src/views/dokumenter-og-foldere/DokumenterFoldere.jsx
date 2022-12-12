import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";

function DokumenterFoldere({ sideData }) {
  const dokumenter = [
    {
      aar: "2012",
      url: "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/aarsregnskab-2012.pdf",
    },

    {
      aar: "2013",
      url: "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/aarsrapport-2013.pdf",
    },
  ];

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"25%"} {...sideData} />
    </PageLayout>
  );
}

export default DokumenterFoldere;
