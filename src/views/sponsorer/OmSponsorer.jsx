import { Box, Flex } from "@chakra-ui/react";
import SponsorAccord from "./SponsorAccord";
import InfoBoks from "./Infoboks";

export default function OmSponsorer() {
  return (
    <Box
      as="section"
      bgColor={"brand.white"}
      py={"5rem"}
      px={"2rem"}
      /*  display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "1.4fr 1fr" }} */
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", md: "auto auto" }}
      /*    justifyItems="center" */

      /*    justifyItems={{ base: "center", lg: "normal" }} */
      justifyItems={{ base: "inherit", lg: "center" }}
      placeContent={"center"}
      gap={{ base: "1rem", md: "2rem", xl: "5rem" }}
    >
      <SponsorAccord />
      <InfoBoks />
    </Box>
  );
}
