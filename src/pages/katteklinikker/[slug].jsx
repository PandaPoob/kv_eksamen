import url from "../../api/url";
import KatteklinikSingle from "../../views/katteklinikker/KatteklinikSingle";

function KatteklinikPage({ klinikData, MedarbejdData }) {
  return <KatteklinikSingle klinikData={klinikData} MedarbejdData={MedarbejdData} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${url}katteklinikker`);
  const results = await res.json();

  return {
    paths: results.map((a) => {
      // console.log(k.id)
      return { params: { slug: String(a.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(Context) {
  const res = await fetch(`${url}katteklinikker/${Context.params.slug}`);
  const klinikData = await res.json();
  const res2 = await fetch(`${url}medarbejdere?per_page`);
  const MedarbejdData = await res2.json();

  return {
    props: {
      klinikData: klinikData,
      MedarbejdData: MedarbejdData,
    },
  };
}

export default KatteklinikPage;