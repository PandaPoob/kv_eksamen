import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import Herrelos from "./Herrelos";
import HvadDuKanGore from "./HvadDuKanGore";

function Medarbejderne({ sideData }) {
  return (
    <PageLayout>
      <SplashHeader
        imgMobPos={"35%"}
        h1mobsize={"heading2"}
        height={"75vh"}
        {...sideData}
      />
      <Herrelos />
      <HvadDuKanGore />
    </PageLayout>
  );
}

export default Medarbejderne;
