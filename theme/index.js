import { extendTheme } from "@chakra-ui/react";

import Heading from "./components/heading";
import Button from "./components/button";
import sizes from "./foundations/sizes";
import colors from "./foundations/colors";
import typography from "./foundations/typography";
import breakpoints from "./foundations/breakpoints";

const components = {
  Heading,
  Button,
};

const foundations = {
  colors,
  breakpoints,
  ...typography,
  sizes,
};

const theme = {
  ...foundations,
  components,
  styles: {
    global: () => ({
      body: {
        backgroundColor: "white",
        color: "#001931",
        fontSize: "xs",
      },
    }),
  },
};

const defaultTheme = extendTheme(theme);

export default defaultTheme;
