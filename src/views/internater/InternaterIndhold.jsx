import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import ArticleLinkGroup from "../../components/layout/ArticleLinkGroup";
import { IoPawOutline } from "react-icons/io5";
import { Box } from "@chakra-ui/react";

export default function InternaterIndhold({ sideData, internatData }) {

    const icon = <IoPawOutline size={60} color="#D43B4D"/>

    const linkdata = internatData.map((k)=> (
        {
            name: k.acf.bynavn,
            urlEndpoint:`/om-os/internater/${k.id}`,
            icon: icon,
        }
    ))

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <Box minH="50vh" display={"grid"} alignContent="center">
        <Box display={"flex"} justifyContent="center" flexWrap={"wrap"} gap="1rem" py={"3rem"} px="1rem">
          <ArticleLinkGroup data={linkdata} />
        </Box>
      </Box>
    </PageLayout>
  );
}