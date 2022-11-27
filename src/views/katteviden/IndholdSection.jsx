import { Box } from "@chakra-ui/react";
import TekstBox from "./TekstBox";
import BilledeBox from "./BilledeBox";
import ListeBox from "./ListeBox";

function IndholdSection({ venstre, hojre }) {
  return (
    <Box
      _even={{ bg: "brand.darkGrey", color: "brand.white" }}
      display="grid"
      justifyContent={"center"}
      mb={"4rem"}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        justifyContent={"center"}
        as="section"
        gap={{ base: "4rem", lg: "2rem" }}
        maxW={"container.xxl"}
        p={"2rem"}
        py={{ lg: "4rem" }}
      >
        {venstre.type === "tekst" ? (
          <Box>
            <TekstBox info={venstre.tekst} />
          </Box>
        ) : venstre.type === "billede" ? (
          <Box>
            <BilledeBox info={venstre.billede} />
          </Box>
        ) : venstre.type === "liste" ? (
          <Box>
            <ListeBox info={venstre.liste} />
          </Box>
        ) : null}

        {hojre.type === "tekst" ? (
          <Box>
            <TekstBox info={hojre.tekst} />
          </Box>
        ) : hojre.type === "billede" ? (
          <Box>
            <BilledeBox info={hojre.billede} />
          </Box>
        ) : hojre.type === "liste" ? (
          <Box>
            <ListeBox info={hojre.liste} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default IndholdSection;
