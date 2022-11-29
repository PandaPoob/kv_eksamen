import url from "../../api/url";
import KatteklinikkerIndhold from "../../views/katteklinikker/KatteKlinikkerIndhold";

function KatteklinikkerPage({ klinikData, sideData }) {
  return <KatteklinikkerIndhold klinikData={klinikData} sideData={sideData}/> ;
}

export async function getStaticProps() {
  const res = await fetch(`${url}katteklinikker`);
  const klinikData = await res.json();
  const res2 = await fetch(`${url}indholdsider/1129`);
  const sideData = await res2.json();

  return {
    props: {
      klinikData: klinikData,
      sideData: sideData,
    },
  };
}

export default KatteklinikkerPage;
