import url from "../../api/url";
import Medlemsblad from "../../views/medlemsblad/Medlemsblad";

function MedlemsbladPage({ sideData }) {
  return <Medlemsblad sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1754`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default MedlemsbladPage;
