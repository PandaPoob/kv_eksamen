import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import img from "../../../assets/images/bliv_fodervart.webp";
import Carousel from "../../../components/features/Carousel";
import InfoArtikel from "../../../components/articles/InfoArtikel";

function BlivFodervart({ sideData, artikelData }) {
  console.log(artikelData);
  const fodervartArtikler = artikelData.filter((a) => {
    if (a.acf.fodervaert) return a;
  });

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"25%"} {...sideData} />
      <Box
        display={"grid"}
        justifyContent={"center"}
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        gap={{ base: "2rem", lg: "4rem" }}
        alignItems="center"
        minH={"70vh"}
        py="4rem"
        px={{ base: "1rem", lg: "4rem" }}
      >
        <Box>
          <Heading as="h2" size="heading2" mb="1rem">
            Genudsætning
          </Heading>
          <Text>
            Mange af de katte Kattens Værn får ind er både syge,
            tilskadekommende og udmagrede og står derfor ikke til at redde.
            Heldigvis er der stadigvæk en portion hvert år, der, trods alle
            odds, har formået at holde sig væk fra biler, landbrugsmaskiner,
            rottegift, skydevåben, sygdomme, mv. Hvis dette er tilfældet for den
            kat du får indfanget kan du overveje at blive en del af
            genudsætningen og blive fodervært. <br /> <br /> Katten bliver
            neutraliseret, vaccineret, dyrlægetjekket, øremærket og registreret
            i Det Danske Katteregister og derefter genudsat i sit vante område.
            Vi genudsætter kun katten, hvis du eller en anden i nærområdet vil
            være fodervært og skriver under på at tage ansvaret for katten
            resten af dens liv. <br />
            <br /> Vores genudsætningsprojekt er et, vi er særligt stolte af, da
            det er den eneste velfungerende løsning, der eksisterer i Danmark
            for de vilde katte. Dette er bla. på grund af at katten ikke
            naturligt kan klare sig selv, da de gennem de sidste mange tusinde
            år er blevet domesticeret og tilpasset vores livsstil. Udover det er
            de fleste heller ikke tamme længere selvom de stammer fra tamme
            katte, der på et tidspunkt har haft en menneskefamilie. Derfor kan
            de ofte ikke håndteres uden fare for at komme til skade, og det er
            også derfor vores katteinspektører benytter sig af fælder til
            indfangning. Når katten er så uhåndterbar er det ofte umuligt at
            socialiserede den så den kan huses hos en ny familie, men den er
            heller ikke egnet til at klare sig selv. Derfor har vi udarbejdet
            genudsætningsprojektet og har brug for foderværter, så der også er
            en plads i verdenen til de katte, som blev svigtet. <br />
            <br />
            Du kan læse mere om vilde katte{" "}
            <NextLink href="/katteviden/553" passHref>
              <Link variant="inLink">her</Link>
            </NextLink>
            .
          </Text>
        </Box>
        <Box
          mt={{ base: "2rem", lg: "0" }}
          position="relative"
          minH={{ base: "24rem", lg: "100%" }}
          width={"100%"}
        >
          <Image src={img} alt={"Vild kat"} layout="fill" objectFit="cover" />
        </Box>
      </Box>
      <Box
        as="section"
        bgColor={"brand.darkGrey"}
        display="grid"
        justifyContent="center"
        py={{ base: "3rem", lg: "6rem" }}
        px="1rem"
        borderBottom="1px solid"
        borderColor="brand.redCta"
      >
        <Heading as="h2" size={"heading2"} textAlign="center" color="white">
          God viden som fodervært
        </Heading>

        <Box bg="brand.darkGrey" display="grid" justifyContent="center">
          <Box
            py={"1rem"}
            overflow="hidden"
            maxW={{ base: "20rem", md: "43rem", lbp: "63rem", xxl: "84rem" }}
          >
            <Carousel
              listData={fodervartArtikler}
              CarouselListItem={InfoArtikel}
              perPage={{ base: 1, md: 2, lbp: 3, xxl: 4 }}
              perMoveVal={{ base: 1, lbp: 1, xl: 1 }}
              customP={{ left: 0, right: 0 }}
              pos={"center"}
              arrowColor={"brand.white"}
            />
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default BlivFodervart;
