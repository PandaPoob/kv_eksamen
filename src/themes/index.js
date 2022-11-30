import { extendTheme } from "@chakra-ui/react";

import Heading from "./components/Heading";
import Button from "./components/Button";
import Link from "./components/Link";
import List from "./components/List";
import FormLabel from "./components/FormLabel";
import Input from "./components/Input";
import Select from "./components/Select";
import { menuTheme } from "./components/Menu";

import sizes from "./foundations/sizes";
import colors from "./foundations/colors";
import typography from "./foundations/typography";
import breakpoints from "./foundations/breakpoints";

const components = {
  Heading,
  Button,
  Link,
  List,
  FormLabel,
  Input,
  Select,
  Menu: menuTheme,
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
