import Head from "next/head";

export default function PageHead({ acf }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <title>{acf.sidetitel}</title>
      <meta name="description" content={acf.metatekst} />
    </Head>
  );
}
