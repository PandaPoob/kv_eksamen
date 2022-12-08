import Head from "next/head";

export default function PageHead({ acf }) {
  return (
    <Head>
      <link rel="favicon" href="/favicon.ico" />
      <title>{acf.sidetitel}</title>
      <meta name="description" content={acf.metatekst} />
    </Head>
  );
}
