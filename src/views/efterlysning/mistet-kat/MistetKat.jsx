import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";

function MistetKat({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader
        imgMobPos={"35%"}
        h1mobsize={"heading2"}
        height={"75vh"}
        {...sideData}
      />
    </PageLayout>
  );
}

export default MistetKat;
