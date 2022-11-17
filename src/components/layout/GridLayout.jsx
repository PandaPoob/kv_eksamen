import { Container } from "@chakra-ui/react";

function GridLayout({ children }) {
  return <Container maxW={"container.xxl"}>{children}</Container>;
}

export default GridLayout;
