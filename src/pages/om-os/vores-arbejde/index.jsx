import VoresArbejde from "../../../views/om_os/vores_arbejde/VoresArbejde";
import url from "../../../api/url";

function VoresArbejdePage({ sideData }) {
  return <VoresArbejde sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1119`);
  const sideData = await res2.json();

  return {
    props: {
      sideData: sideData,
    },
  };
}

export default VoresArbejdePage;
