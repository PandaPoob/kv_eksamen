import Image from "next/image";
import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import ContactBox from "./ContactBox";

function AdoptionsKatPage({ katData }) {
  const {
    navn,
    tag,
    profil_billede,
    miljo,
    alder,
    kon,
    internat,
    kan_med_andre_katte,
    beskrivelse,
  } = katData.acf;

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ lg: "1fr 1fr" }}
      minH={"100vh"}
    >
      <Box bg="brand.lightGrey" boxShadow="md">
        <Box maxW={{ base: "container.sm" }} m={"auto"} px={"1rem"} py={"2rem"}>
          <Heading as="h1" size="heading2">
            <Text as="span" color={"brand.grey"}>
              {tag}
            </Text>{" "}
            {navn}
          </Heading>

          <Image
            src={profil_billede}
            alt={navn}
            width={500}
            height={300}
          ></Image>

          <Box
            bg={"brand.darkGrey"}
            color="brand.white"
            px={"1rem"}
            py="1.6rem"
          >
            <Flex justifyContent={"space-between"} mb="2rem">
              <Box
                as="dl"
                display="grid"
                gridTemplateColumns={"repeat(2, 1fr)"}
                columnGap="1rem"
                rowGap={"1rem"}
              >
                <Text as="dt" fontWeight={"light"}>
                  Miljø
                </Text>
                <Text as="dd" fontWeight={"bold"}>
                  {miljo}
                </Text>

                <Text as="dt" fontWeight={"light"}>
                  Alder
                </Text>
                <Text as="dd" fontWeight={"bold"}>
                  {alder}
                </Text>
              </Box>

              <Box
                as="dl"
                display="grid"
                gridTemplateColumns={"repeat(2, 1fr)"}
                columnGap="1rem"
                rowGap={"1rem"}
              >
                <Text as="dt" fontWeight={"light"}>
                  Køn
                </Text>
                <Text as="dd" fontWeight={"bold"}>
                  {kon}
                </Text>

                <Text as="dt" fontWeight={"light"}>
                  Internat
                </Text>
                <Text as="dd" fontWeight={"bold"}>
                  {internat}
                </Text>
              </Box>
            </Flex>
            <Flex as="dl" justifyContent={"space-between"} pt="1rem">
              <Text as="dt" fontWeight={"light"}>
                Kan med andre katte?*
              </Text>
              <Text as="dd" fontWeight={"bold"}>
                {kan_med_andre_katte}
              </Text>
            </Flex>
          </Box>
          <Text fontSize={"xxs"} fontWeight="light" mt={"0.5rem"}>
            *Vi kan aldrig garantere at en kat kan med andre men vi vurderer
            udfra om kattens har kunne omgås andre på internatet. Dog er der
            mange andre forhold der kan påvirke dette når man får katten med
            hjem.
          </Text>
        </Box>
      </Box>

      <Box bg={"lightyellow"}>
        <Box
          maxW={{ base: "container.sm" }}
          m={"auto"}
          px={"1rem"}
          py={"2rem"}
          display="grid"
          gap={"2rem"}
        >
          <Box boxShadow="md" bg={"brand.white"} p={"2rem"}>
            <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
              Beskrivelse
            </Heading>
            <Text>{beskrivelse}</Text>
          </Box>

          <Box boxShadow="md" bg={"brand.white"} p={"2rem"}>
            <Heading as={"h2"} size="svheading" mb={"0.5rem"}>
              Vil du møde {navn}?
            </Heading>
            <Text>
              Du kan ikke reservere en kat men du er altid velkommen til at
              ringe og få mere information eller aftale et møde med internatet
              så du kan hilse pa katten og se om det er det rigtige match. Se
              internatet her.
            </Text>
            <Divider orientation="horizontal" mt="1rem" />
            <ContactBox internat={internat}></ContactBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte"
  );
  const results = await res.json();

  return {
    paths: results.map((k) => {
      // console.log(k.id)
      return { params: { slug: String(k.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(Context) {
  const res = await fetch(
    `https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/acf/v3/adoptionskatte/${Context.params.slug}`
  );
  const katData = await res.json();

  return { props: { katData } };
}

export default AdoptionsKatPage;
