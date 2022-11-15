import Image from "next/image"
import Link from "next/link"

function AdoptionsKattePage({data}) {
// console.log(data)

    return <div><h1>Se kattene</h1><div>{data.map((kat) => {
       return (<article key={kat.id}>
        <h3>{kat.acf.tag}</h3><h2>{kat.acf.navn}</h2>
        <Image src={kat.acf.profil_billede} alt={kat.acf.navn} width={200} height={100}></Image>
       <Link href={`/adopter/adoptionskatte/${kat.id}`}>Læs mere</Link>
       
       </article>)
    })}</div></div>
}

export async function getStaticProps() {
    const res = await fetch("https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte")
    const data = await res.json()

    return { props: {data} }
}

export default AdoptionsKattePage