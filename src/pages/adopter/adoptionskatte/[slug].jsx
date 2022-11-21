import url from "../../../api/url";
import AdoptionsKat from "../../../views/adopter/adoptionskatte/AdoptionsKat";

function AdoptionsKatPage({ katData }) {
  return <AdoptionsKat katData={katData} />
}

export async function getStaticPaths() {
  const res = await fetch(`${url}adoptionskatte`);
  const results = await res.json();

  return {
    paths: results.map((k) => {
      // console.log(k.id)
      return { params: { slug: String(k.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(Context) {
  const res = await fetch(`${url}adoptionskatte/${Context.params.slug}`);
  const katData = await res.json();

  return { props: { katData } };
}

export default AdoptionsKatPage;
