import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import ArticleLinkGroup from "../../components/layout/ArticleLinkGroup";
import { IoPawOutline } from "react-icons/io5";
import { Box } from "@chakra-ui/react";

export default function KatteklinikkerIndhold({ sideData, klinikData }) {

    const icon = <IoPawOutline size={60} color="#D43B4D"/>

    const linkdata = klinikData.map((k)=> (
        {
            name: k.acf.bynavn,
            urlEndpoint:`/katteklinikker/${k.id}`,
            icon: icon,
        }
    ))
/* 
    const articleLinkData = [
        {
            name: "Aalborg",
            urlEndpoint: `/adopter/adoptionskatte/${id}`,
            icon: <IoPawOutline size={60} color="#D43B4D"/>,
        },
        {
            name: "Billund",
            urlEndpoint: `/adopter/adoptionskatte/${id}`,
            icon: <IoPawOutline size={60} color="#D43B4D"/>,
        },
        {
            name: "Brøndby",
            urlEndpoint: `/adopter/adoptionskatte/${id}`,
            icon: <IoPawOutline size={60} color="#D43B4D"/>,
        },
        {
            name: "Slagelse",
            urlEndpoint: `/adopter/adoptionskatte/${id}`,
            icon: <IoPawOutline size={60} color="#D43B4D"/>,
        },
          
    ] */
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <Box display={"flex"} justifyContent="center" flexWrap={"wrap"} gap="1rem" mt={"3rem"}>
        <ArticleLinkGroup data={linkdata} />
      </Box>
    </PageLayout>
  );
}
