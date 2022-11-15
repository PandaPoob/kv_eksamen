import Link from "next/link"


function Nav({children}) {



    return (<><header><nav><ul><li><Link href="/">Home</Link></li><li><Link href="/adopter/adoptionskatte">Se kattene</Link></li></ul></nav></header>{children}</>)

}

export default Nav