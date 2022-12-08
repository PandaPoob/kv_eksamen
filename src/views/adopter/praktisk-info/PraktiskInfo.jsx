import React from "react";
import { Box } from "@chakra-ui/react";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import Prisliste from "./Prisliste";
import InfoBokse from "./InfoBokse";
import ArticlesSection from "./ArticlesSection";
import HighlightSection from "./HighlightSection";
export default function PraktiskInfo({ sideData, articleData, imgData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"30%"} {...sideData} />
      <Prisliste />
      <InfoBokse />
      <ArticlesSection articleData={articleData} />
      <HighlightSection {...imgData} />
    </PageLayout>
  );
}
