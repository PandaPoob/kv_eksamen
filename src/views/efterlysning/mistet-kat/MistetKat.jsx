import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ImDiamonds } from "react-icons/im";
import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";

function MistetKat({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader
        imgMobPos={"35%"}
        h1mobsize={"heading2"}
        height={"75vh"}
        {...sideData}
      />
      <Flex
        flexDir="column"
        justify="center"
        alignItems="center"
        px="1rem"
        py="2rem"
        minH="60vh"
      >
        <Heading as="h2" size="heading2" mb="1rem">
          Hvad du kan gøre
        </Heading>
        <Text maxW="60ch" mb="1rem">
          Har du kigget vores liste over fundne/fremlyste katte igennem efter
          din kat? Hvis ikke kan du finde den lige{" "}
          <NextLink href={`/indberetning/fremlyste-katte`} passHref>
            <Link variant={"inLink"}> her</Link>
          </NextLink>
          .
        </Text>
        <Text maxW="60ch">
          Hvis du har kigget listen igennem og du ikke har fundet din kat så
          følg vores råd og overvej at opslå en announce i vores liste over
          efterlyste katte.
        </Text>
        <NextLink href={`/efterlysning/efterlys-kat`} passHref>
          <Link
            variant={"blueBtn"}
            textAlign={"center"}
            mt={"1.5rem"}
            mb={"2rem"}
            justifyContent="center"
            px="2.5rem"
          >
            Efterlys kat
          </Link>
        </NextLink>
      </Flex>

      <Box
        bg="brand.lightGrey"
        display="grid"
        justifyContent="center"
        px="1rem"
        py={{ base: "4rem", lg: "6rem" }}
      >
        <Box
          bg="brand.white"
          boxShadow="md"
          maxW="container.md"
          py={{ base: "2rem", lg: "3rem" }}
          px={{ base: "1rem", md: "2rem", lg: "4rem" }}
        >
          <Heading as="h3" size="heading3" mb="2rem">
            Hvad du ellers kan gøre
          </Heading>
          <Divider mb="2rem" orientation="horizontal" />
          <List display={"grid"} gap={{ base: "2.5rem", lg: "1.5rem" }}>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Når din kat er mærket, skal du kontakte Det Danske Katteregister
                og Dansk Katteregister og få katten efterlyst. På{" "}
                <NextLink href="https://www.katteregister.dk/" passHref>
                  <Link isExternal variant="exLink">
                    www.katteregister.dk
                  </Link>
                </NextLink>{" "}
                kan du let lave en efterlysningsplakat.
              </Text>
            </ListItem>

            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Drys noget af kattens brugte kattegrus ud langt indersiden af
                matriklen/ved opgangsdøren, så katten har et duftspor at følge.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Hæng både plakaterne op på vejene omkring dit hjem og i dit
                nærmeste supermarked, men også længere væk. Tal med folk når du
                deler dem ud. Du ved aldrig hvem der lige kan have set din kat.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Smid opslag i dine naboers postkasser, så de er opmærksomme på
                at holde øje.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Hør dine naboer ad, om du må få lov at kigge ind i deres skure
                og garager, hvor katten måske kan være blevet låst inde ved et
                uheld.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Når du går ud og leder efter din kat, kan du tage lidt foder og
                rasle med. Din kat kommer ikke nødvendigvis frem af sig selv,
                når den hører dig, hvis den er blevet bange, så husk at kigge
                grundigt efter under biler og i buske, og vent gerne til der er
                ro i området (om aftenen). Tag en lygte med og kig både højt og
                lavt.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Du kan også kontakte internater og dyrlæger i dit lokalområde og
                høre dem, om de har fået katten ind. Fremlyste katte hos Kattens
                Værn finder du ved at trykke{" "}
                <NextLink href="/indberetning/fremlyste-katte" passHref>
                  <Link variant="inLink">her</Link>
                </NextLink>
                .
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text>
                Brug diverse kattesider på internettet og på{" "}
                <NextLink href="https://www.facebook.com/" passHref>
                  <Link isExternal variant="exLink">
                    Facebook
                  </Link>
                </NextLink>{" "}
                til at efterlyse katten og hold øje med fremlysningerne på de
                samme sider. F.eks. på{" "}
                <NextLink href="https://kattegale.dk/" passHref>
                  <Link isExternal variant="exLink">
                    kattegale.dk
                  </Link>
                </NextLink>
                , eller på{" "}
                <NextLink
                  href="https://www.dyrenesbeskyttelse.dk/efterlysning/opret"
                  passHref
                >
                  <Link isExternal variant="exLink">
                    Dyrenes Beskyttelse
                  </Link>
                </NextLink>
                . Lav også gerne en efterlysning i din lokale avis/på dit lokale
                intranet.
              </Text>
            </ListItem>
          </List>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default MistetKat;
