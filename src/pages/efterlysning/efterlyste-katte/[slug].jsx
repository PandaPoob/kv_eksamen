import url from "../../../api/url";
import SingleViewKat from "../../../components/efterlyst+fremlyst/SingleViewKat";

function EfterlystKatPage({ efterlystKatData }) {
  return <SingleViewKat EFdata={efterlystKatData} type="efterlysning" />
}

export async function getStaticPaths() {
  const res = await fetch(`${url}efterlystekatte?per_page`);
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
  const res = await fetch(`${url}efterlystekatte/${Context.params.slug}`);
  const efterlystKatData = await res.json();

  return { props: { efterlystKatData } };
}

export default EfterlystKatPage;
