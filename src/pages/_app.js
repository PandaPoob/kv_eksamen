import { ChakraProvider } from "@chakra-ui/react";
import "../themes/fonts.css";
import Nav from "../components/layout/Nav";
import defaultTheme from "../themes";
import BackgroundWrapper from "../components/layout/BackgroundWrapper";
import Footer from "../components/layout/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <BackgroundWrapper>
        <LazyMotion features={domAnimation}>
          <Nav>
            <Footer>
              <Component {...pageProps} />
            </Footer>
          </Nav>
        </LazyMotion>
      </BackgroundWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
