import url from "../../../api/url";
import SingleViewKat from "../../../components/efterlyst_fremlyst/SingleViewKat";

function FremlystKatPage({ fremlystKatData }) {
  return <SingleViewKat EFdata={fremlystKatData} type="fremlysning" />
}

export async function getStaticPaths() {
  const res = await fetch(`${url}fremlystekatte?per_page`);
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
  const res = await fetch(`${url}fremlystekatte/${Context.params.slug}`);
  const fremlystKatData = await res.json();

  return { props: { fremlystKatData } };
}

export default FremlystKatPage;