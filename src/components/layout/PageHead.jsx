import Head from "next/head";

export default function PageHead({ acf }) {
  return (
    <Head>
      <link rel="icon" href="/favikon.ico" />
      <title>{acf.sidetitel}</title>
      <meta name="description" content={acf.metatekst} />
    </Head>
  );
}
