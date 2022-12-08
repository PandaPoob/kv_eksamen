import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import KISplash from "../../components/klinikker_internater/KISplash";
import Teamet from "../../components/klinikker_internater/Teamet";
import LinkBanner from "./LinkBanner";
import KontaktSektion from "./KontaktSektion";
import HjaelpTilSektion from "./HjaelpTilSektion";
import OmInternatet from "./OmInternatet";

export default function InternatSingle({ internatData, MedarbejdData }) {
  const acf = internatData.acf;
  const by = acf.bynavn;
  let teamet = MedarbejdData.filter((m) => {
    return m.acf.internat === by;
  });
  return (
    <PageLayout>
      <KISplash acf={acf} />
      <LinkBanner data={acf.banner} />
      <OmInternatet data={acf.intro_sektion} />
      <HjaelpTilSektion data={acf.hjaelp_til_sektion} />
      <KontaktSektion data={acf.kontaktoplysninger} />
      <Teamet teamet={teamet} />
    </PageLayout>
  );
}
