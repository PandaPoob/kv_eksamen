import url from "../../../api/url";
import Sponsorer from "../../../views/gor-en-forskel/sponsorer/Sponsorer";

function SponsorerPage({ data, sideData }) {
  return <Sponsorer data={data} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}sponsorer?per_page`);
  const data = await res.json();

  const res2 = await fetch(`${url}indholdsider/454`);
  const sideData = await res2.json();

  return { props: { data: data, sideData: sideData } };
}

export default SponsorerPage;
