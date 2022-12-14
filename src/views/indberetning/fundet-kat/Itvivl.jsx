import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Divider,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

function Itvivl() {
  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems={"center"}
      flexWrap="wrap"
      gap={"6rem"}
      py="4rem"
      px="1rem"
      minH="70vh"
    >
      <Box display="grid" justifyContent={{ base: "center", lg: "flex-start" }}>
        <Heading as="h2" size="heading2" mb={"1rem"}>
          Stadig i tvivl?
        </Heading>

        <Text maxW="70ch">
          Du er altid velkommen til at kontakte administrationen hvis du stadig
          ikke er sikker på hvad du skal gøre med den kat du har fundet eller
          hvis du har nogen spørgsmål. Du kan også kontakte os angående vilde
          katte, hvis du skulle være i tvivl om noget.
        </Text>
        <NextLink
          href={`/indberetning/fundet-kat/test`}
          passHref
          prefetch={false}
        >
          <Link
            variant={"redBtn"}
            textAlign={"center"}
            mt={"2rem"}
            mb={"2rem"}
            justifyContent="center"
            maxW="12rem"
          >
            Tag testen
          </Link>
        </NextLink>
      </Box>
      <Box
        bg="brand.white"
        boxShadow={"1px 2px 6px 1px #B8B8B8"}
        py={{ base: "2rem", lg: "3rem" }}
        px={{ base: "2rem", lg: "4rem" }}
        maxW="45rem"
      >
        {" "}
        <Heading as="h3" size="heading3" mb={"1rem"}>
          Kontakt os
        </Heading>
        <Divider orientation="horizontal" mb="2rem" />
        <Flex justifyContent={"space-between"} gap="2rem" flexWrap={"wrap"}>
          <Box>
            <Flex as={"dl"} mb="2rem" alignItems={"center"} gap="0.5rem">
              <Flex as="dt" alignItems={"center"}>
                <Icon
                  color="brand.redCta"
                  w={{ base: 6, md: 8 }}
                  h={{ base: 6, md: 8 }}
                  as={BsTelephone}
                />
              </Flex>

              <Text fontWeight={"semibold"} as="dd" fontSize={"xs"}>
                38 88 12 00
              </Text>
            </Flex>
            <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
              <Flex as="dt" alignItems={"center"}>
                <Icon
                  color="brand.redCta"
                  w={{ base: 6, md: 8 }}
                  h={{ base: 6, md: 8 }}
                  as={BsEnvelope}
                />
              </Flex>
              <Text fontWeight={"semibold"} as="dd" fontSize={"xs"}>
                kv@kattens-vaern.dk
              </Text>
            </Flex>
          </Box>

          <Box
            as="dl"
            display="grid"
            gridTemplateColumns={"repeat(2, 1fr)"}
            columnGap="0.5rem"
            rowGap={"1rem"}
          >
            <Text as="dt" fontWeight={"light"}>
              Man - Tors:
            </Text>
            <Text as="dd" fontWeight={"semibold"}>
              10:00 - 15:00*
            </Text>
            <Text as="dt" fontWeight={"light"}>
              Fre:
            </Text>
            <Text as="dd" fontWeight={"semibold"}>
              10:00 - 14:00*
            </Text>
            <Text as="dt" fontWeight={"light"}>
              Lør - Søn:
            </Text>
            <Text as="dd" fontWeight={"semibold"}>
              Lukket
            </Text>
          </Box>
        </Flex>
        <Text mt="1rem" fontSize="xxs">
          *Bemærk frokostlukket mellem 12:00-12:30
        </Text>
      </Box>
    </Flex>
  );
}

export default Itvivl;
