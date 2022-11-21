import url from "../../api/url";
import ArtikelSide from "../../views/nyheder/ArtikelSide";
import PageLayout from "../../components/layout/PageLayout";


function NyhedsArtikelPage({nyhedsData}){
    return (
      <PageLayout>
        <ArtikelSide nyhedsData={nyhedsData} />
      </PageLayout>
    );
}

export async function getStaticPaths() {
  const res = await fetch(`${url}nyhedsartikler`);
  const results = await res.json();

  return {
    paths: results.map((a) => {
      return { params: { slug: String(a.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(Context) {
  const res = await fetch(`${url}nyhedsartikler/${Context.params.slug}`);
  const nyhedsData = await res.json();

  return { props: { nyhedsData } };
}

export default NyhedsArtikelPage;