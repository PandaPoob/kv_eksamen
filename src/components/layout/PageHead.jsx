import Head from "next/head"

export default function PageHead ({sidetitel, metatekst}){
    return (
        <Head>
            <title>{sidetitel}</title>
            <meta name="description" content={metatekst} />
        </Head>
    )
}