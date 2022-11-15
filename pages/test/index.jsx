import Image from "next/image"
import Link from "next/link"

function TestPage({data}) {
// console.log(data)

    return <div><h1>Test</h1><div>
       <article key={data.id}>
        <h3>{data.acf.tag}</h3><h2>{data.acf.navn}</h2>
        <Image src={data.acf.profil_billede} alt={data.acf.navn} width={200} height={100}></Image>
       
       </article>
    </div></div>
}

export async function getStaticProps() {
    const res = await fetch("https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte/54")
    const data = await res.json()

    return { props: {data} }
}

export default TestPage