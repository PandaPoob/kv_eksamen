import { ChakraProvider } from "@chakra-ui/react";
import "../themes/fonts.css";
import Nav from "../components/layout/Nav";
import defaultTheme from "../themes";
import BackgroundWrapper from "../components/layout/BackgroundWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <BackgroundWrapper>
        <Nav>
          <Component {...pageProps} />
        </Nav>
      </BackgroundWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
