import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import { Box, Heading, Flex, Text, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

function VoresArbejde({ sideData }) {
  return (
    <PageLayout color={"brand.blue"}>
      <SplashHeader {...sideData}></SplashHeader>

      <Box
        // bgColor="brand.lightGrey"
        bgColor="lightyellow"
        display={"grid"}
        justifyContent={"center"}
        px="1rem"
        color={"brand.blue"}
        as="section"
        pb="2rem"
      >
        <Heading as="h2" size={"heading2"} textAlign={"center"} pt="4rem">
          Indfangning og rehabilitering
        </Heading>
        <Text pt="1rem">
          Kattens Værns primære fokus er indfangning og rehabilitering af
          herreløse og vilde katte. Dette er en større process og vi har mange
          afdelinger og fagfolk som varetager byrden.
          <br />
          <br />
          Herreløse katte kan både være de vilde katte som aldrig er blevet
          mærket eller chippet men også de tamkatte som ingen ved kendes ved som
          er blevet efterladt eller glemt.
        </Text>
        <Flex justifyContent={"center"}>
          <Box width={"16rem"}>
            <NextLink href={`/indberetning/fundet-kat`} passHref>
              <Link
                variant={"redBtn"}
                textAlign={"center"}
                mt={"1.5rem"}
                mb={"2rem"}
                justifyContent="center"
              >
                Har du fundet en kat?
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Box>
      <Box
        // bgColor="brand.lightGrey"
        bgColor="brand.lightGrey"
        display={"grid"}
        justifyContent={"center"}
        px="1rem"
        color={"brand.blue"}
        as="section"
        pb="2rem"
      >
        <Heading
          as="h3"
          size={"heading3"}
          textAlign={"center"}
          pt="3rem"
          pb="0.6rem"
        >
          Katteinspektørkorpset
        </Heading>
        <Text pt="1rem" as="p" size={"body"}>
          Kattens Værns Katteinspektørkorps dækker næsten hele Danmark, og er
          dem der bærer ansvaret for indfangningen af vilde katte. <br />
          <br /> Korpset består af 10 fuldtidsansatte medarbejdere, som kører
          året rundt i alt slags vejr og på alle tider af døgnet, for at hjælpe
          de vilde- og vildtlevende katte. Alle har fagrelevant uddannelse
          og/eller mange års katteerfaring og håndtering. De har også modtaget
          undervisningen af vores egne dyrlæger på Katteklinikkerne i både
          relevant lovgivning og human aflivning, så vi er sikre på, at alle har
          lært det samme, og at de kan leve op til vores høje standard.
          <br />
          <br /> Alle inspektører kører ud fra eget hjem, og er ikke
          nødvendigvis tilknyttet et af vores egne internater, da det ikke er
          hensigtsmæssigt for kattene at blive transporteret for langt. Vi har
          derfor samarbejdsaftaler med andre dyrlæger og internater, i de
          områder hvor vi ikke selv har til huse. Se vores samarbejdspartnere
          <NextLink href={`/indberetning/fremlys-kat`} passHref>
            <Link fontWeight={"bold"} cursor="pointer">
              {" "}
              her
            </Link>
          </NextLink>
          <br />
          <br /> Når katten er blevet indfanget vurderer katteinspektøren om
          katten kan rehabiliteres. Den vurdering afhænger af flere ting bl.a.
          om katten er sund og rask og om hvor tam den er.
          <br />
          <br />
        </Text>
        <Box>Herinde skal der være en YT video</Box>
      </Box>
      <Box as="section" px="1rem" pb="2rem" bgColor={"lightYellow"}>
        <Heading as="h3" size={"heading3"} textAlign={"center"} pt="4rem">
          Internater
        </Heading>
        <Text pt="1rem">
          Kattens Værns primære fokus er indfangning og rehabilitering af
          herreløse og vilde katte. Dette er en større process og vi har mange
          afdelinger og fagfolk som varetager byrden.
          <br />
          <br />
          Herreløse katte kan både være de vilde katte som aldrig er blevet
          mærket eller chippet men også de tamkatte som ingen ved kendes ved som
          er blevet efterladt eller glemt.
        </Text>
        <Box display={"flex"} gap="1rem" justifyContent={"center"}>
          <Box>
            <NextLink href={`/om-os/internater`} passHref>
              <Link
                variant={"blueBtn"}
                textAlign={"center"}
                py="0.5rem"
                justifyContent={"center"}
                mt={"1.5rem"}
                mb={"2rem"}
                width="170px"
              >
                Se internaterne
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href={`/adopter/adoptionskatte`} passHref>
              <Link
                variant={"redBtn"}
                textAlign={"center"}
                py="0.5rem"
                justifyContent={"center"}
                mt={"1.5rem"}
                mb={"2rem"}
                width={{ base: "170px" }}
              >
                Se kattene
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Box>
      <Box as="section" px="1rem" pb="2rem" bgColor={"brand.lightGrey"}>
        <Heading
          as="h3"
          size={"heading3"}
          textAlign={"center"}
          pt="3rem"
          pb="0.6rem"
        >
          Genudsætning af vilde katte
        </Heading>
        <Text as="p" size={"body"}>
          Katten er ikke en naturlig del af den danske fauna, og den kan derfor
          ikke klare sig selv. De vilde katte, der lever i Danmark, er killinger
          af tamkatte, der er blevet smidt ud, blevet væk eller på anden måde
          vokset op uden menneskelig socialisering. Men selvom de ikke er til at
          komme til, søger de mod steder, hvor der er mennesker, netop fordi de
          ikke kan klare sig selv.
          <br />
          <br />
          Når en vild kat bliver indfanget og bliver vurderet rask og sund men
          er for usocialiseret til at kunne blive adopteret er genudsætning en
          mulighed. Dette kræver dog en fodervært som er ansvarlig for mad, vand
          og ly til katten. Hvis nogen skulle ønske det har Kattens Værn en
          fordelagtigt ordning hvor katten bliver neutraliseret, øremærket,
          dyrlægetjekket og registreret inden den bliver sat tilbage i sit vante
          område. Gennem neutralisering sikrer vi, at kattene ikke formerer sig.
          Samtidig hjælper kattene til med at holde mus og rotter væk fra
          området.
          <br />
          <br />
          Vores katteinspektører genudsætter hvert år mellem 500 og 700 katte.
          Det er katte, der, selvom de er vilde, har en registreret ejer, og som
          bliver passet godt på. Genudsættelse er den bedste løsning for de
          vilde katte, da det andet alternativ desværre er aflivning.
          <br />
          <br />
          Læs mere om genudsætning og foderværter{" "}
          <NextLink href={`/genudsatning`} passHref>
            <Link fontWeight={"bold"} cursor="pointer">
              {" "}
              her
            </Link>
          </NextLink>
        </Text>
        <Box>Her skal der være en artikel i thinks</Box>
      </Box>
      <Box as="section" px="1rem" pb="2rem" bgColor={"lightYellow"}>
        <Heading as="h2" size={"heading2"} textAlign={"center"} pt="4rem">
          Kattens velfærd
        </Heading>
        <Text as="p" size={"body"}>
          Kattens Værns arbejder for bedre forhold for katten gennem disse
          mærkesager.{" "}
        </Text>
        <Box>
          <Heading
            as="h4"
            size={"heading4"}
            textAlign={"center"}
            pt="2rem"
            pb="0.6rem"
          >
            Neutralisering
          </Heading>
          <Text as="p" size={"body"}>
            De estimerede 250.000 vilde og vildtlevende katte i Danmark, som
            ikke kan klare sig selv stammer alle fra katte, der ikke er blevet
            neutraliseret.
            <br />
            Vi anbefaler derfor altid, at man får steriliseret eller kastreret
            sin kat. Hver dag har vi i vores arbejde at gøre med de katte, der
            er blevet i overskud, fordi ejerkatte netop ikke er blevet
            neutraliseret.
            <br />
            Ved at du neutraliserer din kat undgår at bidrage til bestanden af
            vilde og herreløse katte i Danmark for bare to kønsmodne katte på
            f.eks. fire år kan nå at blive til over 4800 katte!
            <br />
            Du kan få din kat steraliseret hos din dyrelæge eller på en af vores
            <NextLink href={`/katteklinikker/`} passHref>
              <Link fontWeight={"bold"} cursor="pointer">
                {" "}
                katteklinikker
              </Link>
            </NextLink>
            . Du kan læse mere om neutralisering/steralisering{" "}
            <NextLink href={`/neutralisering`} passHref>
              <Link fontWeight={"bold"} cursor="pointer">
                {" "}
                her
              </Link>
            </NextLink>
            .
          </Text>
        </Box>
        <Box>her skal være et billede</Box>
      </Box>
    </PageLayout>
  );
}

export default VoresArbejde;

// Link til artikel https://www.epaper.dk/dyrefondet/magasin/32/?fbclid=IwAR1CXJHaCsWansIPfxwa1qaKUyPzX3yPND4jppEScMKOc61a2DH-iRy3S7s
