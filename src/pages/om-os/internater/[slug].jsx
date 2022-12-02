import url from "../../../api/url";
import InternatSingle from "../../../views/internater/InternatSingle";

function InternatPage({ internatData, MedarbejdData }) {
  return <InternatSingle internatData={internatData} MedarbejdData={MedarbejdData} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${url}internater`);
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
  const res = await fetch(`${url}internater/${Context.params.slug}`);
  const internatData = await res.json();
  const res2 = await fetch(`${url}medarbejdere?per_page`);
  const MedarbejdData = await res2.json();

  return {
    props: {
      internatData: internatData,
      MedarbejdData: MedarbejdData,
    },
  };
}

export default InternatPage;