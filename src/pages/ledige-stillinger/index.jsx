import url from "../../api/url";
import LedigeStillinger from "../../views/ledige-stillinger/LedigeStillinger";

function LedigeStillingerPage({ sideData }) {
  return <LedigeStillinger sideData={sideData} />;
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1753`);
  const sideData = await res2.json();

  return { props: { sideData } };
}

export default LedigeStillingerPage;
