import { Box } from "@chakra-ui/react";
import SponsorAccord from "./SponsorAccord";
import InfoBoks from "./Infoboks";

export default function OmSponsorer() {
  return (
    <Box
      as="section"
      py={"5rem"}
      px={"2rem"}
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
      justifyItems={{ base: "inherit", md: "center" }}
      placeContent={"center"}
      gap={{ base: "1rem", md: "2rem", xl: "3rem" }}
      maxW="container.xl"
      m="auto"
    >
      <SponsorAccord />
      <InfoBoks />
    </Box>
  );
}
