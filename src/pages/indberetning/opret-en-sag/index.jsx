import url from "../../../api/url";
import OpretSag from "../../../views/indberetning/opret-sag/OpretSag";

function OpretSagPage({ sideData }) {
  return <OpretSag sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/1679`);
  const sideData = await res.json();

  return { props: { sideData } };
}

export default OpretSagPage;
