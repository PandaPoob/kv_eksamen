import url from "../../api/url";
import KatteViden from "../../views/katteviden/KatteViden";

function KatteVidenPage({ data, sideData }) {
  console.log(data);
  return <KatteViden data={data} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}infoartikler?per_page`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/841`);
  const sideData = await res2.json();

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default KatteVidenPage;
