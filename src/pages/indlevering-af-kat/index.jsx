import IndleveringAfKat from "../../views/indlevering-af-kat/IndleveringAfKat";
import url from "../../api/url";

function IndleveringAfKatPage({ sideData }) {
  return <IndleveringAfKat sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1695`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default IndleveringAfKatPage;
