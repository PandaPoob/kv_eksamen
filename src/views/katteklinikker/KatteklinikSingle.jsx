import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { Box, Flex, Heading, Text} from "@chakra-ui/react";
import KlinikBanner from "./KlinikBanner";
import KlinikIntroSektion from "./KlinikIntroSektion";
import KlinikKontaktinfo from "./KlinikKontaktinfo";
import Prisliste from "./Prisliste";
import Teamet from "../../components/klinikker_internater/Teamet";
import HighlightSektion from "./HighlightSektion";
import KISplash from "../../components/klinikker_internater/KISplash";
import Head from "next/head";

export default function KatteklinikSingle({ klinikData, MedarbejdData }) {
  const acf = klinikData.acf;
  const by = acf.bynavn;
  let teamet = MedarbejdData.filter((m) => {
    return m.acf.katteklinik === by;
  });

  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favikon.ico" />
        <title>{by} Katteklinik</title>
        <meta name="description" content="Læs om den enkelte katteklinik her og find åbningstider, adresse og andre relevante oplysninger." />
      </Head>
      <KISplash acf={acf} />
      <KlinikBanner acf={acf} />
      <KlinikIntroSektion acf={acf} />
      <KlinikKontaktinfo acf={acf} />
      <Prisliste acf={acf} />
      <Teamet teamet={teamet} />
      <HighlightSektion acf={acf} />
    </PageLayout>
  );
}
