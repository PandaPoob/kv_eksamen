import url from "../../../api/url";
import Medarbejderne from "../../../views/om_os/medarbejdere/Medarbejderne";

function MedarbejdernePage({ data, sideData }) {
  return <Medarbejderne data={data} sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}medarbejdere?per_page`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/461`);
  const sideData = await res2.json();

  return {
    props: {
      data: data,
      sideData: sideData,
    },
  };
}

export default MedarbejdernePage;
