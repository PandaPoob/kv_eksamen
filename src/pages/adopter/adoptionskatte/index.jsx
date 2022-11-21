import url from "../../../api/url";
import AdoptionsKatte from "../../../views/adopter/adoptionskatte/AdoptionsKatte";

function AdoptionsKattePage({ data, sideData }) {
  return <AdoptionsKatte data={data} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}adoptionskatte`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/166`);
  const sideData = await res2.json();

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default AdoptionsKattePage;
