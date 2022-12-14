import url from "../../api/url";
import DokumenterFoldere from "../../views/dokumenter-og-foldere/DokumenterFoldere";

function DokumenterFolderePage({ sideData }) {
  return <DokumenterFoldere sideData={sideData} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}infoartikler?per_page`);
  const data = await res.json();

  const res2 = await fetch(`${url}indholdsider/1733`);
  const sideData = await res2.json();

  return { props: { artikelData: data, sideData: sideData } };
}

export default DokumenterFolderePage;
