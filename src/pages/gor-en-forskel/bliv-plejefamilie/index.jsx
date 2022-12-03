import BlivPlejefamilie from "../../../views/bliv-plejefamilie/BlivPlejefamilie";
import url from "../../../api/url";
function BlivPlejefamiliePage({ sideData }) {
  // console.log(data)

  return (
   <BlivPlejefamilie sideData={sideData}/>
  );
}

export async function getStaticProps() {
  const res2 = await fetch(`${url}indholdsider/1382`)
  const sideData = await res2.json()
 
  return {
    props: {
      sideData: sideData,
    },
  };
 }

export default BlivPlejefamiliePage;
