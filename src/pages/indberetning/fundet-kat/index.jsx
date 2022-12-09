import FundetKat from "../../../views/indberetning/fundet-kat/FundetKat";
import url from "../../../api/url";

function FundetKatPage({ sideData }) {
  return <FundetKat sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1557`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default FundetKatPage;
