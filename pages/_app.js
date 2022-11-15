import '../styles/globals.css'
import Nav from "../components/layout/Nav"

function MyApp({ Component, pageProps }) {
  return <Nav><Component {...pageProps} /></Nav>
}

export default MyApp
