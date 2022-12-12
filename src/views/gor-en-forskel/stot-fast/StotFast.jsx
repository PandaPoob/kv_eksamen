import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import BelobOptions from "../../../components/generics/BelobOptions";
import PageLayout from "../../../components/layout/PageLayout";
import PageHead from "../../../components/layout/PageHead";
import SplashHeader from "../../../components/generics/SplashHeader";
import NextLink from "next/link";
export default function StotFast({ sideData, data }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader textPos="center" imgMobPos={"30%"} {...sideData} />
      <Box display={"grid"} placeContent="center" px="1rem" py="6rem">
        <Box display={"grid"} maxW="container.lg">
          <Box
            display={"grid"}
            bg="brand.white"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            p="1rem"
            gap="1rem"
          >
            <Heading as="h2" size="heading3" m="auto">
              Doner med betalingskort
            </Heading>
            <Text m="auto">Vælg beløb (DKK)</Text>
            {data.map((optList) => (
              <BelobOptions
                display={"grid"}
                columns={{ base: "1fr", md: "1fr 1fr" }}
                key={optList.id}
                data={optList.acf}
              />
            ))}
            <NextLink href={""} passHref>
              <Link
                variant="redBtn"
                justifyContent={"center"}
                maxW="10rem"
                mx="auto"
                my="1rem"
              >
                Gå til betaling
              </Link>
            </NextLink>
          </Box>
          <Text
            gridColumn={"1/2"}
            maxW={"30rem"}
            mt="1rem"
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
