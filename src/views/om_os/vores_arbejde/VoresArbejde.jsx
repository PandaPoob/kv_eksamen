import PageLayout from "../../../components/layout/PageLayout";
import SplashHeader from "../../../components/generics/SplashHeader";
import PageHead from "../../../components/layout/PageHead";
import { Box, Heading, Flex, Text, Link, AspectRatio } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import img1 from "../../../assets/images/vores_arbejde_1.webp";
import img2 from "../../../assets/images/vores_arbejde_2.webp";
import img3 from "../../../assets/images/vores_arbejde_3.webp";
import img4 from "../../../assets/images/vores_arbejde_4.webp";
import FindKommuneDrawer from "../../../components/features/FindKommuneDrawer";

function VoresArbejde({ sideData }) {
  return (
    <PageLayout color={"brand.blue"}>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} imgMobPos={"10%"}></SplashHeader>

      <Box
        display={"grid"}
        justifyContent={"center"}
        alignItems="centers"
        px="1rem"
        color={"brand.blue"}
        as="section"
        pb="2rem"
        gap={"1rem"}
        minH="40vh"
        py="4rem"
      >
        <Heading as="h2" size={"heading2"} textAlign={"center"} pt="4rem">
          Indfangning og rehabilitering
        </Heading>
        <Text maxW={"70ch"}>
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
        bgColor="brand.lightGrey"
        display={"grid"}
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        justifyContent={"center"}
        gap="1rem"
        alignItems="center"
        px={{ base: "1rem", lg: "4rem" }}
        color={"brand.blue"}
        as="section"
        py="4rem"
      >
        <Box display={"grid"} justifyContent="center" alignContent={"center"}>
          <Heading as="h3" size={"heading3"} textAlign={"center"} pb="0.6rem">
            Katteinspektørkorpset
          </Heading>
          <Text pt="1rem" as="p" size={"body"} maxW="70ch">
            Kattens Værns Katteinspektørkorps dækker næsten hele Danmark, og er
            dem der bærer ansvaret for indfangningen af vilde katte. <br />
            <br /> Korpset består af 10 fuldtidsansatte medarbejdere, som kører
            året rundt i alt slags vejr og på alle tider af døgnet, for at
            hjælpe de vilde- og vildtlevende katte. Alle har fagrelevant
            uddannelse og/eller mange års katteerfaring og håndtering. De har
            også modtaget undervisningen af vores egne dyrlæger på
            Katteklinikkerne i både relevant lovgivning og human aflivning, så
            vi er sikre på, at alle har lært det samme, og at de kan leve op til
            vores høje standard.
            <br />
            <br /> Alle inspektører kører ud fra eget hjem, og er ikke
            nødvendigvis tilknyttet et af vores egne internater, da det ikke er
            hensigtsmæssigt for kattene at blive transporteret for langt. Vi har
            derfor samarbejdsaftaler med andre dyrlæger og internater, i de
            områder hvor vi ikke selv har til huse. Se vores samarbejdspartnere
            <NextLink href={`/samarbejdspartnere`} passHref>
              <Link variant={"inLink"}> her.</Link>
            </NextLink>
            <br /> <br />
            Når katten er blevet indfanget vurderer katteinspektøren om katten
            kan rehabiliteres. Den vurdering afhænger af flere ting bl.a. om
            katten er sund og rask og om hvor tam den er.
          </Text>
        </Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/aqWjIOCyt7M"
            title="Kattens Vaerns arbejde"
            border="0"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>

      <Flex
        as="section"
        px="1rem"
        py="4rem"
        pb="2rem"
        minH={"60vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading
          as="h3"
          size={"heading3"}
          textAlign={"center"}
          alignItems="center"
          mb={"1rem"}
        >
          Internater
        </Heading>
        <Text maxW={"70ch"}>
          Kattens Værns primære fokus er indfangning og rehabilitering af
          herreløse og vilde katte. Dette er en større process og vi har mange
          afdelinger og fagfolk som varetager byrden.
          <br />
          <br />
          Herreløse katte kan både være de vilde katte som aldrig er blevet
          mærket eller chippet men også de tamkatte som ingen ved kendes ved som
          er blevet efterladt eller glemt.
        </Text>
        <Box
          display={"flex"}
          gap={{ base: "1rem", lg: "2rem" }}
          justifyContent={"center"}
          mt="2rem"
        >
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
      </Flex>

      <Box
        bgColor="brand.lightGrey"
        display={"grid"}
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        justifyContent={"center"}
        columnGap={{ base: "2rem", lg: "4rem" }}
        alignItems="center"
        px={{ base: "1rem", lg: "4rem" }}
        color={"brand.blue"}
        as="section"
        py="4rem"
      >
        <Box>
          <Heading
            as="h3"
            size={"heading3"}
            textAlign={{ base: "center", lg: "left" }}
            pb="1.5rem"
          >
            Genudsætning af vilde katte
          </Heading>
          <Text as="p" size={"body"}>
            Katten er ikke en naturlig del af den danske fauna, og den kan
            derfor ikke klare sig selv. De vilde katte, der lever i Danmark, er
            killinger af tamkatte, der er blevet smidt ud, blevet væk eller på
            anden måde vokset op uden menneskelig socialisering. Men selvom de
            ikke er til at komme til, søger de mod steder, hvor der er
            mennesker, netop fordi de ikke kan klare sig selv.
            <br />
            <br />
            Når en vild kat bliver indfanget og bliver vurderet rask og sund men
            er for usocialiseret til at kunne blive adopteret er genudsætning en
            mulighed. Dette kræver dog en fodervært som er ansvarlig for mad,
            vand og ly til katten. Hvis nogen skulle ønske det har Kattens Værn
            en fordelagtigt ordning hvor katten bliver neutraliseret, øremærket,
            dyrlægetjekket og registreret inden den bliver sat tilbage i sit
            vante område. Gennem neutralisering sikrer vi, at kattene ikke
            formerer sig. Samtidig hjælper kattene til med at holde mus og
            rotter væk fra området.
            <br />
            <br />
            Vores katteinspektører genudsætter hvert år mellem 500 og 700 katte.
            Det er katte, der, selvom de er vilde, har en registreret ejer, og
            som bliver passet godt på. Genudsættelse er den bedste løsning for
            de vilde katte, da det andet alternativ desværre er aflivning.
            <br />
            <br />
            Læs mere om genudsætning og foderværter{" "}
            <NextLink href={`/indberetning/bliv-fodervaert`} passHref>
              <Link variant={"inLink"}> her</Link>
            </NextLink>
          </Text>
        </Box>

        <Box
          mt={{ base: "2rem", lg: "0" }}
          position="relative"
          minH={{ base: "18rem", lg: "100%" }}
          width={"100%"}
        >
          <Image
            src={img1}
            alt={"Genudsætning"}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          p={"1rem"}
          gridColumn={{ lg: "2/3" }}
          bg={"brand.white"}
          borderBottomRadius="0.2rem"
          color={"brand.blue"}
        >
          {" "}
          <Text fontSize="smallH" fontWeight={"semibold"} mb="0.5rem">
            Læs om et vellykket genudsætningsprojekt
          </Text>
          <Text fontSize="xs">
            Læs Dyrefondets artikel om genudsætningskattene i Hastrupparken i
            Køge lige{" "}
            <NextLink
              href={`https://www.epaper.dk/dyrefondet/magasin/32/`}
              passHref
            >
              <Link variant={"exLink"} isExternal>
                her
              </Link>
            </NextLink>{" "}
            (Side 21-25)
          </Text>
        </Box>
      </Box>

      <Box as="section" pb="2rem">
        <Heading as="h2" size={"heading2"} textAlign={"center"} pt="4rem">
          Kattens velfærd
        </Heading>
        <Text textAlign="center" px="1rem">
          Kattens Værns arbejder for bedre forhold for katten gennem disse
          mærkesager:
        </Text>
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
          <Box display={"grid"} gridColumn={{ lg: "2/3" }}>
            <Heading
              as="h4"
              size={"heading4"}
              textAlign={{ base: "center", lg: "left" }}
              pt={{ base: "0", md: "2rem" }}
              pb="0.6rem"
            >
              Neutralisering
            </Heading>
            <Text maxW={"70ch"}>
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
              Du kan få din kat steraliseret hos din dyrelæge eller på en af
              vores
              <NextLink href={`/katteklinikker`} passHref>
                <Link variant={"inLink"}> katteklinikker</Link>
              </NextLink>
              . Du kan læse mere om neutralisering/steralisering her.
              {/*     <NextLink href={`/neutralisering`} passHref>
              <Link fontWeight={"bold"} cursor="pointer">
                {" "}
                her
              </Link>
            </NextLink>
            . */}
            </Text>
          </Box>
          <Box
            position="relative"
            minH={{ base: "18rem", lg: "100%" }}
            width={"100%"}
            gridColumn={{ lg: "1/2" }}
            gridRow={{ lg: "1/2" }}
          >
            <Image
              src={img2}
              alt={"Genudsætning"}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          display={"grid"}
          justifyContent={"center"}
          gridTemplateColumns={{ lg: "1fr 1fr" }}
          gap={{ base: "2rem", lg: "4rem" }}
          alignItems="center"
          minH={"70vh"}
          bg="brand.lightGrey"
          py="4rem"
          px={{ base: "1rem", lg: "4rem" }}
        >
          <Box display={"grid"} justifyContent="center">
            <Heading
              as="h4"
              size={"heading4"}
              textAlign={{ base: "center", lg: "left" }}
              pb="1rem"
            >
              Øre- og chipmærkning
            </Heading>
            <Text maxW={"70ch"}>
              Landets mange internater får hvert år et stort antal af tamme
              katte ind, som er blevet fundet tilløbende i villakvarterer eller
              sommerhuskvarterer. Nogle af kattene er sandsynligvis sat af med
              vilje, men en stor del er også blevet væk fra deres hjem. Et sted
              er der en familie, der savner sit kæledyr, men det er praktisk
              taget umuligt at genforene kat og ejer, hvis ikke katten er
              mærket. <br /> <br />
              Vi anbefaler både øre- og chipmærkning, da det vil være det mest
              optimale for din kat i tilfælde af at den skulle blive
              væk.Fordelen ved øretatoveringen er, at den umiddelbart er synlig,
              og det er derfor let at se, at katten er savnet. Dog kan den
              udviskes over tid og derfor er chippen også vigtigt, selvom den
              ikke kan ses med det blotte øje. Både med udekatte og indekatte er
              det en god idé at sikre med mærkning. Specielt indekattene kan
              være svære at kalde til sig, hvis de ved et uheld slipper ud, da
              de er skræmte, og derfor gemmer sig, selvom de kan høre deres ejer
              kalde. <br /> <br />
              Når katten er mærket og registreret i Det Danske Katteregister, er
              du sikker på, at din kat kan hjælpes hjem til dig igen, hvis
              uheldet er ude. Husk også at holde dine oplysninger opdaterede i
              dit register, hvis du f.eks. flytter eller skifter telefon nummer.{" "}
              <br />
              <br />
              Din dyrlæge kan klare begge dele og husk efterfølgende at sikre
              dig, at dyrlægen har tilmeldt katten til Det Danske Katteregister.
              Du kan også få din kat øre- og chipmærket hos din dyrlæge eller på
              en af vores
              <NextLink href={`/katteklinikker`} passHref>
                <Link variant={"inLink"}> katteklinikker</Link>
              </NextLink>
              . Læs mere om øre- og chipmærkning og lovgivningen her.
              {/*     <NextLink href={`/neutralisering`} passHref>
              <Link fontWeight={"bold"} cursor="pointer">
                {" "}
                her
              </Link>
            </NextLink>
            . */}
            </Text>
          </Box>
          <Box
            position="relative"
            minH={{ base: "18rem", lg: "100%" }}
            width={"100%"}
          >
            <Image
              src={img3}
              alt={"Genudsætning"}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      <Flex
        as="section"
        px="1rem"
        py="4rem"
        pb="2rem"
        minH={"60vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading
          as="h3"
          size={"heading3"}
          textAlign={"center"}
          alignItems="center"
          mb={"1rem"}
        >
          Katteklinikker
        </Heading>
        <Text maxW={"70ch"}>
          Vores katteklinikker tilbyder efter aftale konsultation, vaccination,
          neutralisering, de mest almindelige kirurgiske procedure og medicinsk
          udredning til alle katte.
          <br />
          <br />
          Alt overskuddet fra Katteklinikken går direkte og ubeskåret til
          arbejdet med både tamme og vildtlevende og herreløse katte hos Kattens
          Værn.
        </Text>

        <Box mt="2rem">
          <NextLink href={`/katteklinikker`} passHref>
            <Link
              variant={"blueBtn"}
              textAlign={"center"}
              py="0.5rem"
              justifyContent={"center"}
              mt={"1.5rem"}
              mb={"2rem"}
            >
              Se katteklinikkerne
            </Link>
          </NextLink>
        </Box>
      </Flex>

      <Box
        display={"grid"}
        justifyContent={"center"}
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        gap={{ base: "2rem", lg: "4rem" }}
        alignItems="center"
        minH={"70vh"}
        bg="brand.lightGrey"
        py="4rem"
        px={{ base: "1rem", lg: "4rem" }}
      >
        <Box display={"grid"} justifyContent="center">
          <Heading
            as="h4"
            size={"heading2"}
            textAlign={{ base: "center", lg: "left" }}
            pb="2rem"
          >
            Øre- og chipmærkning
          </Heading>
          <Text maxW={"70ch"}>
            Da Kattens Værn startede i 1933 som forening var det primært
            fokuseret på baggårdskatte i København. I mange år var løsningen at
            sende overskuddet af baggårdskatte til Jylland, hvor landmændene
            kunne få glæde af kattene som musefangere.
            <br /> <br />
            Idag dækker vores indfangningsservice næsten hele Danmark. Der er nu
            rigeligt katte på landet i Jylland, og vi kunne aldrig finde på at
            flytte en vild kat fra dens oprindelige område. <br />
            Vores mangeårige arbejde med kattene har givet os en stor viden om
            dette fabelagtige dyr, og vi bruger mange kræfter på at formidle den
            viden, vi har om katten til andre instanser. Det være sig både
            katteejere, kommuner og politikere.
            <br />
            <br />I 1981 købte Kattens Værn bygninger på Dronning Olgas Vej,
            hvor foreningen fik både hovedsæde, internat og katteklinik. Mange
            forbinder dermed Kattens Værn med Frederiksberg, men adressen var
            dyr, så det viste sig efterhånden at give god mening at sælge
            bygningerne på den attraktive adresse og finde noget bedre og
            billigere lidt uden for København. <br />I slutningen af 2012 blev
            bygningerne på Dronning Olgas Vej solgt, og derefter begyndte et
            større detektivarbejde for at finde det perfekte sted til Kattens
            Værns fremtidige residens. Valget faldt på Brøndby, hvor en
            produktionsvirksomhed tidligere havde haft til huse.
            <br />
            Rammerne for både mennesker og katte er gode i Brøndby, og
            flytningen frigjorde en god sum penge, som i stedet kunne bruges på
            det, vi gør bedst – nemlig at hjælpe kattene. <br /> <br />I dag har
            vi internat i Aalborg, Brøndby, Billund og Slagelse og du kan læse
            mere om dem{" "}
            <NextLink href={`/om-os/internater`} passHref>
              <Link variant={"inLink"}>her</Link>
            </NextLink>
            .
          </Text>
        </Box>
        <Box
          display={"grid"}
          justifyContent="center"
          bg={"brand.white"}
          boxShadow="md"
          borderRadius="0.2rem"
          p={{ base: "2rem", lg: "4rem" }}
        >
          <Heading
            as="h4"
            size={"heading4"}
            textAlign={{ base: "center", lg: "left" }}
            pb="1rem"
          >
            Katten som politisk dagsorden
          </Heading>
          <Text maxW={"70ch"}>
            Op indtil 80’erne var det i mange år almindeligt at aflive kattene
            med udstødningsgas. Denne praksis fik Kattens Værns mangeårige
            dyrlæge og daværende formand for bestyrelsen Tom Schantz Kristensen
            ændret da han fik påvist, hvor meget katten led af den
            aflivningsmetode. Han fik indført, at katten skulle aflives humant
            med en indsprøjtning, som man afliver en tam kat.
            <br /> <br />
            Idag arbejder vi på at lægge pres på politikerne i forhold til
            ændringer og tiltag i den nuværende lovgivning, der ikke er udpræget
            kattevenlig. Vi har også aftale om indfangning af vilde katte med
            ca. halvdelen af landets kommuner. Overvej at tjekke din kommune om
            de er en af dem. <br /> <br />
            Hvis din kommune ikke samarbejder med os men man ønsker det, kan man
            gøre sine lokalpolitikere opmærksomme, ved at skrive til kommunen
            direkte eller via læserbreve i lokale medier. Man har også mulighed
            for at starte en underskriftsindsamling og vi har lavet et udkast
            til hvordan sådan en blanket kan se ud. Den kan downloades{" "}
            <NextLink
              href={`https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/underskriftsindsamling.pdf`}
              passHref
            >
              <Link isExternal variant={"exLink"}>
                {" "}
                her
              </Link>
            </NextLink>
            , og kan bruges frit.
          </Text>
          <FindKommuneDrawer />
        </Box>
      </Box>

      <Box width={"100vw"} height={{ base: "100vh", md: "50vh", xl: "60vh" }}>
        <Box
          position="relative"
          height={"100%"}
          width={"100%"}
          display="grid"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            zIndex={1}
            position="absolute"
            top={"0"}
            width="100%"
            height={"100%"}
            bgColor="brand.darkGrey"
            opacity={{ base: "65%", lg: "50%" }}
          ></Box>
          <Image
            src={img4}
            alt={"Kat i natur"}
            layout="fill"
            objectFit="cover"
          />
          <Box px={"2rem"} zIndex={1} position="relative" display="grid">
            <Heading as={"h1"} size="heading2" color={"brand.white"}>
              Vil du være med til at gøre en forskel for Danmarks katte?
            </Heading>
            <NextLink href={`/stottemuligheder`} passHref>
              <Link
                justifySelf={"center"}
                variant={"redBtn"}
                mt={"1rem"}
                px="2+rem"
                justifyContent="center"
              >
                Støt kattene nu
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default VoresArbejde;

// Link til artikel https://www.epaper.dk/dyrefondet/magasin/32/?fbclid=IwAR1CXJHaCsWansIPfxwa1qaKUyPzX3yPND4jppEScMKOc61a2DH-iRy3S7s
