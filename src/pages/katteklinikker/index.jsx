import url from "../../../api/url";
import ArticleLinkGroup from "../../components/layout/ArticleLinkGroup";

function KatteklinikkerPage({ klinikData, sideData }) {
  return <ArticleLinkGroup data={klinikData} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}fremlystekatte`);
  const klinikData = await res.json();
  const res2 = await fetch(`${url}indholdsider/544`);
  const sideData = await res2.json();

  return {
    props: {
      klinikData: klinikData,
      sideData: sideData,
    },
  };
}

export default KatteklinikkerPage;
