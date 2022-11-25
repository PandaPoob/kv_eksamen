import url from "../../api/url";
import KatteVidenSingle from "../../views/katteviden/KatteVidenSingle";

function AdoptionsKatPage({ artikelData }) {
  return <KatteVidenSingle artikelData={artikelData} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${url}infoartikler?per_page`);
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
  const res = await fetch(`${url}infoartikler/${Context.params.slug}`);
  const artikelData = await res.json();

  return { props: { artikelData } };
}

export default AdoptionsKatPage;
