import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import BelobOptions from "../../components/generics/BelobOptions";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import NextLink from "next/link";
import SMSogMobile from "./SMSogMobile";

export default function Doner({ data, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader textPos="center" imgMobPos={"30%"} {...sideData} />
      <Box display={"grid"} placeContent="center" px="1rem" py="6rem">
        <Box
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gridTemplateRows={{ lg: "1fr 1fr" }}
          gap="2rem"
          maxW="container.lg"
        >
          <SMSogMobile />
          <Box
            display={"grid"}
            gridRow={"1/3"}
            bg="brand.white"
            boxShadow={"md"}
            p="1rem"
            gap="1rem"
          >
            <Heading as="h2" size="heading4" m="auto">
              Doner med betalingskort
            </Heading>
            <Text m="auto">Vælg beløb (DKK)</Text>
            {data.map((optList) => (
              <BelobOptions
                display={"grid"}
                columns={"1fr"}
                key={optList.id}
                data={optList.acf}
              />
            ))}
            <NextLink href={""} passHref>
              <Link
                variant="redBtn"
                justifyContent={"center"}
                maxW="10rem"
                m="auto"
              >
                Gå til betaling
              </Link>
            </NextLink>
          </Box>
          <Text
            gridColumn={"1/2"}
            m="auto"
            placeSelf={"end"}
            as={"i"}
            fontSize="smaller"
          >
            *Hvis du ønsker at donere/støtte for mere end 17.000,- ialt årligt
            kontakt vores administration om mere information om skat og fradrag.
          </Text>
        </Box>
      </Box>
    </PageLayout>
  );
}
