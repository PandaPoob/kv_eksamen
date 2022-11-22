import { ChakraProvider } from "@chakra-ui/react";
//import "../styles/globals.css";
import "../themes/fonts.css";
import Nav from "../components/layout/Nav";
import defaultTheme from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </ChakraProvider>
  );
}

export default MyApp;
