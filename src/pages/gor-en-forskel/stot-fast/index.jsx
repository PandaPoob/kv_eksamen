import url from "../../../api/url";
import StotFast from "../../../views/gor-en-forskel/stot-fast/StotFast";

function StotFastpage({ data, sideData }) {
  return <StotFast data={data} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}belobmuligheder`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/1378`);
  const sideData = await res2.json();

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default StotFastpage;
