import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";
import PageLayout from "../../../components/layout/PageLayout";
import InfoSection from "./InfoSection";
import Liste from "./Liste";

export default function PengeTil({ sideData, imgData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <Liste />
      <InfoSection {...imgData} />
    </PageLayout>
  );
}
