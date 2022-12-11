import BlivFodervart from "../../../views/indberetning/bliv-fodervart/BlivFodervart";
import url from "../../../api/url";

function BlivFodervartPage({ sideData, artikelData }) {
  return <BlivFodervart sideData={sideData} artikelData={artikelData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}infoartikler?per_page`);
  const data = await res.json();

  const res2 = await fetch(`${url}indholdsider/1688`);
  const sideData = await res2.json();

  return { props: { artikelData: data, sideData: sideData } };
}
export default BlivFodervartPage;
