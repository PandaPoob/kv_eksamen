import url from "../../../api/url";
import MistetKat from "../../../views/efterlysning/mistet-kat/MistetKat";

function MistetKatPage({ sideData }) {
  return <MistetKat sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1687`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default MistetKatPage;
