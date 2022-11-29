import url from "../../api/url";
import KatteklinikSingle from "../../views/katteklinikker/KatteklinikSingle";

function KatteklinikPage({ klinikData }) {
  return <KatteklinikSingle klinikData={klinikData} />;
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

  return { props: { klinikData } };
}

export default KatteklinikPage;