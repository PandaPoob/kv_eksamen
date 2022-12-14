import { Box, Heading, Text } from "@chakra-ui/react";
import FindKommuneDrawer from "../../../components/features/FindKommuneDrawer";

function FundetVildKat() {
  return (
    <Box px="1rem" display="grid">
      <Heading as="h2" size="heading3" mb="1rem">
        Har du fundet en vild kat?
      </Heading>
      <Text>
        Vi vil altid gerne hjælpe med indfangning, hvis du har fået en vild
        tilløber i dit nærområde. Dog afhænger både fremgangsmåden og prisen af
        hvilken aftale din kommune har. Hvis ikke din kommune har en aftale med
        os, skal du selv betale de udgifter, der er forbundet med indfangningen.
        Dette er grundet, at kommunen ikke hjælper økonomisk og selvom Kattens
        Værn selvfølgelig selv betaler en del af de reelle udgifter, har vi
        desværre ikke økonomi til at bære udgiftsbyrden alene.
        <br /> <br /> I forhold til fremgangsmåde, skal du enten kontakte os
        eller kommunen, for at bestille en indfangning. Dette afhænger også af
        kommunens aftale med os.
      </Text>
      <FindKommuneDrawer />
    </Box>
  );
}

export default FundetVildKat;
