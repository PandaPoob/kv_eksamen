import React from "react";
import { Box, Heading, Link, Divider, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Abningstider({ data }) {
  const abningstider = data.tiderne;
  const abningstiderArr = Object.entries(abningstider).map((e) => ({
    id: e[0],
    tider: e[1],
  }));

  //remove empty entries (false)
  const cleanAbningstiderArr = abningstiderArr.filter(
    (t) => t.tider !== false && t.tider.dage !== ""
  );

  const butikstider = data.butiksabningstider;

  const butikstiderArr = Object.entries(butikstider).map((e, index) => ({
    id: index + "butikstider",
    tider: e[1],
  }));

  //remove empty entries (false)
  const cleanButikstiderArr = butikstiderArr.filter(
    (t) => t.tider !== false && t.tider.dage !== ""
  );

  return (
    <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
      <Box display={"grid"} gap="1rem" pb={"1rem"}>
        <Heading as={"h3"} size="heading4">
          Åbningstider
        </Heading>
        <Text>
          {data.introtekst}{" "}
          <NextLink href={data.linkurl} passhref>
            <Link variant={"inLink"}>{data.linktekst}</Link>
          </NextLink>
        </Text>
      </Box>
      <Divider></Divider>
      <Box py="1rem" display="grid" gap="1rem">
        <Heading as="h4" size="heading5">
          {data.overskrift}
        </Heading>
        <Text>{data.infotekst}</Text>
        {cleanAbningstiderArr.map((t) => (
          <Box key={t.id} display="grid" gridTemplateColumns={"1fr 1fr"}>
            <Text fontSize={{ base: "xxs", md: "xs" }}>{t.tider.dage}:</Text>
            <Text fontSize={{ base: "xxs", md: "xs" }} fontWeight={"semibold"} placeSelf="end">
              {t.tider.tider}
            </Text>
          </Box>
        ))}
      </Box>
      {data.internatsbutik === true ? (
        <Box>
          <Divider borderColor={"brand.borderGray"} mb="1.5rem"></Divider>
          <Heading as="h4" size="heading5" mb="1rem">
            Internatsbutik
          </Heading>
          <Text>Disse tider gælder ikke for adoption af katte, det er udelukkende butikken</Text>

          {cleanButikstiderArr.map((t) => (
            <Box key={t.id} display={"grid"} gridTemplateColumns="1fr 1fr" mt="1rem">
              <Text fontSize={{ base: "xxs", md: "xs" }}>{t.tider.dage}:</Text>
              <Text fontSize={{ base: "xxs", md: "xs" }} fontWeight={"semibold"} placeSelf="end">
                {t.tider.tider}
              </Text>
            </Box>
          ))}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
