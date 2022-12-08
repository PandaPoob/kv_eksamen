import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import InfoArtikel from "../../components/articles/InfoArtikel";
import GridLayout from "../../components/layout/GridLayout";

function KatteViden({ data, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />

      <GridLayout>
        {data.map((a) => {
          return <InfoArtikel key={a.id} {...a} />;
        })}
      </GridLayout>
    </PageLayout>
  );
}

export default KatteViden;
