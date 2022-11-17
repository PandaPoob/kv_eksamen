import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Nav from "../components/layout/Nav";
import defaultTheme from "../theme";
import "../theme/fonts.css";

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
