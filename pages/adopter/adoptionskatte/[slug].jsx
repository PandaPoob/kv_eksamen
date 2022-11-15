import Image from "next/image"

function AdoptionsKatPage({katData}) {
    const {navn, tag, profil_billede} = katData.acf
    // console.log(navn)

    return <div><h1>{tag} {navn}</h1> <Image src={profil_billede} alt={navn} width={500} height={300}></Image></div>
}

export async function getStaticPaths() {

    const res = await fetch("https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte")
    const results = await res.json()
   
    return {
        paths: results.map((k) => {
           // console.log(k.id)
            return {params: {slug: String(k.id)}}
        }),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte/${context.params.slug}`)
    const katData = await res.json()

    return {props: {katData}}
}

export default AdoptionsKatPage