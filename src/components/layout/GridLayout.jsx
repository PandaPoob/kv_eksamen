import { Box } from "@chakra-ui/react";

function GridLayout({ children }) {
  return (
    <Box
      maxW={"container.xxl"}
      display="grid"
      gap={"2rem"}
      gridTemplateColumns={{
        md: "1fr 1fr",
        lbp: "1fr 1fr 1fr",
        xxl: "1fr 1fr 1fr 1fr",
      }}
    >
      {children}
    </Box>
  );
}

export default GridLayout;
