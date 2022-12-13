import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";
import SplashHeader from "../generics/SplashHeader";

function Step1Dono({ sideData, onBelobCallback }) {
  const textArr = [
    "10% rabat på ydelser og produkter (ikke medicin) hos  katteklinikken i Brøndby.",
    "10% rabat på din kats forsikring hos Dyrekassen Danmark.",
    "10% på foder og katteartikler hos Kattens Værns internater i Brøndby og Aalborg.",
    "Vores blad Kattens Venner tilsendes fire gange om året.",
  ];

  return (
    <>
      <SplashHeader {...sideData} imgMobPos={"30%"} />
      <Box py="6rem" px="1rem">
        <Box
          display={"grid"}
          gap="3rem"
          placeContent="center"
          bg={"brand.white"}
          boxShadow={"1px 2px 6px 1px #B8B8B8"}
          maxW={"container.md"}
          p="2rem"
          m="auto"
        >
          <Heading as="h2" size="heading3">
            For 240kr om året får du...
          </Heading>
          <List display={"grid"} gap="2rem">
            {textArr.map((t, i) => (
              <ListItem key={i}>
                <ListIcon as={ImDiamonds} color="brand.redCta" />
                {t}
              </ListItem>
            ))}
          </List>
          <Button
            onClick={() => onBelobCallback()}
            mt="2rem"
            variant="redBtn"
            mb="1rem"
            justifyContent={"center"}
            width="14rem"
            m="auto"
          >
            Bliv medlem nu
          </Button>

          <Text as={"i"} fontSize="smaller">
            Medlemskontingentet kan ikke trækkes fra i Skat, men al yderligere
            støtte op til 17.000 kroner årligt, er fradragsberettiget.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Step1Dono;
