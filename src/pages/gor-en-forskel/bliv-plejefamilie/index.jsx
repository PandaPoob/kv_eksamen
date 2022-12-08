import BlivPlejefamilie from "../../../views/bliv-plejefamilie/BlivPlejefamilie";
import url from "../../../api/url";
function BlivPlejefamiliePage({ sideData, imgData }) {
  return <BlivPlejefamilie sideData={sideData} imgData={imgData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1382`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}indholdsbilleder/1390`);
  const imgData = await res2.json();

  return {
    props: {
      sideData: sideData,
      imgData: imgData,
    },
  };
}

export default BlivPlejefamiliePage;
