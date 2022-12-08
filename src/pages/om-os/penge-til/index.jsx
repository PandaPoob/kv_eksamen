import PengeTil from "../../../views/om_os/penge-til/PengeTil";
import url from "../../../api/url";

function PengeTilPage({ sideData, imgData }) {
  return <PengeTil sideData={sideData} imgData={imgData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1492`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}indholdsbilleder/1498`);
  const imgData = await res2.json();

  return {
    props: {
      sideData: sideData,
      imgData: imgData,
    },
  };
}
export default PengeTilPage;
