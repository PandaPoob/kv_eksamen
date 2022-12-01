import PageLayout from "../../components/layout/PageLayout";
import Hovedsponsorer from "./Hovedsponsorer";
import PageHead from "./../../components/layout/PageHead";
import SplashHeader from "./../../components/generics/SplashHeader";
import Solvsponsorer from "./Solvsponsorer";
import Bronzesponsorer from "./Bronzesponsorer";
import Potesponsorer from "./Potesponsorer";
import OmSponsorer from "./OmSponsorer";

export default function Sponsorer({ data, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <OmSponsorer />

      <Hovedsponsorer data={data} />
      <Solvsponsorer data={data} />
      <Bronzesponsorer data={data} />
      <Potesponsorer data={data} />
    </PageLayout>
  );
}
