import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

function IndfangningsPris() {
  return (
    <Box px="1rem" my="4rem">
      <Heading as="h2" size="heading4" mb="1rem">
        Priser hvis din kommune ikke har en aftale
      </Heading>
      <Tabs
        isFitted
        variant="unstyled"
        bg={"brand.lightGrey"}
        colorScheme="blueKv"
      >
        <TabList p={"1rem"}>
          <Tab
            pr="1rem"
            pb="1rem"
            bg="brand.lightGrey"
            fontSize={{ base: "xs", lg: "smallH" }}
            fontWeight="bold"
            borderRight={"1px solid"}
            color="brand.grey"
            borderBottom={"1px solid"}
            _selected={{ borderBottom: "none", color: "brand.blue" }}
          >
            Hvis vi fanger ind
          </Tab>
          <Tab
            pl="1rem"
            pb="1rem"
            fontSize={{ base: "xs", lg: "smallH" }}
            fontWeight="bold"
            color="brand.grey"
            borderBottom={"1px solid"}
            _selected={{ borderBottom: "none", color: "brand.blue" }}
          >
            Hvis du fanger ind
          </Tab>
        </TabList>
        <TabPanels px="2rem">
          <TabPanel>
            <Text>
              Indfangningspris: 550,00 kr. pr. kat, Dette beløb dækker både
              indfangning og en eventuel human aflivning. Oveni kommer et
              kørselsgebyr på 250,00 kr. pr. dag. <br /> <br /> Genudsætning:
              650 kr. pr. kat Overvej at genudsætte katten og blive fodervært.
              beløbet dækker neutralisering, øremærkning, vaccination, tjek for
              katteAIDS/-Leukæmi og behandling af eventuelle øremider. Katten
              bliver samtidig også registreret i Det Danske Katteregister.{" "}
              <br /> <br />
              Kattens Værn dækker selv den resterende del af dyrlægens udgifter
              til katte, der skal genudsættes. Vores genudsætningsprogram er den
              eneste velfungerende løsning for de vilde katte i Danmark.
            </Text>
            <NextLink
              href={`/indberetning/bliv-fodervaert`}
              passHref
              prefetch={false}
            >
              <Link
                variant={"blueBtn"}
                textAlign={"center"}
                mt={"1.5rem"}
                mb={"1rem"}
                justifyContent="center"
              >
                Læs mere
              </Link>
            </NextLink>
          </TabPanel>
          <TabPanel>
            <Text>
              Du kan selv indfange en vildtlevende kat, hvis du låner en
              godkendt kattefælde. Den kan man nogle gange låne hos kommunen,
              dyrlægen eller på et dyrehospital. <br /> <br />
              Før du går i gang så husk at det altid kræver en tilladelse fra
              matrikelejeren, for at kunne indfange og genudsætte katte. (f.eks.
              lejeboliger, etageejendomme, mv.) <br /> <br />
              Du skal lave en aftale med en lokal dyrlæge vedrørende prisen for
              aflivning eller genudsætning. Når katten er i fælden, skal du
              transportere den til dyrlægen og få den aflivet eller ordnet.
              Dette er for egen regning.
              <br /> <br />
              Se de dyrlæger, vi samarbejder med, om genudsætningskatte{" "}
              <NextLink href={`/samarbejdspartnere`} passHref>
                <Link variant={"inLink"}> her.</Link>
              </NextLink>{" "}
              <br /> <br />
              Overvej at genudsætte katten og blive fodervært i stedet for
              aflivning. Vores genudsætningsprogram er den eneste velfungerende
              løsning for de vilde katte i Danmark.
            </Text>
            <NextLink
              href={`/indberetning/bliv-fodervaert`}
              passHref
              prefetch={false}
            >
              <Link
                variant={"blueBtn"}
                textAlign={"center"}
                mt={"1.5rem"}
                mb={"1rem"}
                justifyContent="center"
              >
                Læs mere
              </Link>
            </NextLink>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default IndfangningsPris;
