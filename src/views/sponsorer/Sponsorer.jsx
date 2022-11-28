import PageLayout from "../../components/layout/PageLayout";
import Hovedsponsorer from "./Hovedsponsorer";
import PageHead from "./../../components/layout/PageHead";
import SplashHeader from "./../../components/generics/SplashHeader";

export default function Sponsorer({ data, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />

      <Hovedsponsorer data={data} />
    </PageLayout>
  );
}
