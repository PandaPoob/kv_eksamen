import { Box } from "@chakra-ui/react";

function GridLayout({ children }) {
  return (
    <Box display={"grid"} justifyContent="center" py={"4rem"}>
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
    </Box>
  );
}

export default GridLayout;
