import { Link, Box, Heading, Flex, Text } from "@chakra-ui/react";
import TekstBox from "./TekstBox";
import BilledeBox from "./BilledeBox";
import ListeBox from "./ListeBox";

function Section({ venstre, hojre }) {
  //render pa venstre type
  //render pa hojre type
  //const column = Object.entries(sektioner).map((e) => e[1]);

  console.log(venstre);
  return (
    <Box
      as="section"
      display={"grid"}
      gridTemplateColumns={{ md: "1fr 1fr" }}
      gap={"2rem"}
      mb={"4rem"}
      _even={{ bg: "gray.100" }}
      justifySelf={"center"}
    >
      <Box minH={"50vh"} w={"100%"} px={"1rem"}>
        {venstre.type === "tekst" ? (
          <TekstBox info={venstre.tekst} />
        ) : venstre.type === "billede" ? (
          <BilledeBox info={venstre.billede} />
        ) : venstre.type === "liste" ? (
          <ListeBox />
        ) : null}
      </Box>
      <Box minH={"50vh"} w={"100%"} px={"1rem"}>
        {hojre.type === "tekst" ? (
          <TekstBox info={hojre.tekst} />
        ) : hojre.type === "billede" ? (
          <BilledeBox info={hojre.billede} />
        ) : hojre.type === "liste" ? (
          <ListeBox />
        ) : null}
      </Box>
    </Box>
  );
}

export default Section;
