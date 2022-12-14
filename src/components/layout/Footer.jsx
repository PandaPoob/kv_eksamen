import { Box, Text, Icon, Flex, Link } from "@chakra-ui/react";
import FooterGroup from "./FooterGroup";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import NextLink from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer({ children }) {
  const footerData = [
    {
      titel: "Kattens Værn",
      subTitel: [
        { navn: "Sponsorer", link: "/gor-en-forskel/sponsorer" },
        { navn: "Samarbejdspartnere", link: "/samarbejdspartnere" },
        { navn: "Ledige stillinger", link: "/ledige-stillinger" },
        { navn: "Dokumenter & Foldere", link: "/dokumenter-og-foldere" },
      ],
    },
    {
      titel: "Nyheder",
      subTitel: [
        { navn: "Medlemsblad", link: "/medlemsblad" },
        { navn: "Nyhedsarkiv", link: "/nyheder" },
        { navn: "Katteviden", link: "/katteviden" },
      ],
    },
    {
      titel: "Internater",
      subTitel: [
        { navn: "Aalborg", link: "/om-os/internater/1351" },
        { navn: "Billund", link: "/om-os/internater/1352" },
        { navn: "Brøndby", link: "/om-os/internater/1202" },
        { navn: "Slagelse", link: "/om-os/internater/1350" },
      ],
    },
  ];

  return (
    <>
      {children}
      <Box bg={"brand.darkGrey"} p="2rem" pt={{ lg: "3rem" }}>
        <Flex
          flexDir={{ base: "column", lg: "row", xl: "row" }}
          columnGap={{ base: "2rem", lg: "4rem" }}
          rowGap={{ base: "2rem", lg: "0" }}
          flexWrap={"wrap"}
          justifyContent={{ xxl: "space-evenly" }}
        >
          {footerData.map((g) => {
            return <FooterGroup key={g.titel} {...g} />;
          })}

          <Box>
            <Text
              mb={"1rem"}
              fontWeight={"bold"}
              color={"brand.white"}
              fontSize="smallH"
            >
              Administrationen
            </Text>
            <Flex as={"dl"} alignItems={"center"} gap="0.8rem" mb={"0.8rem"}>
              <Flex as="dt" alignItems={"center"}>
                <Icon
                  aria-label="Email"
                  color="brand.white"
                  w={"1.5rem"}
                  h={"1.5rem"}
                  as={BsEnvelope}
                />
              </Flex>
              <Text as="dd" color="brand.white">
                kv@kattens-vaern.dk
              </Text>
            </Flex>
            <Flex as={"dl"} alignItems={"center"} gap="0.8rem">
              <Flex as="dt" alignItems={"center"}>
                <Icon
                  aria-label="Telefonnummer"
                  color="brand.white"
                  w={"1.5rem"}
                  h={"1.5rem"}
                  as={BsTelephone}
                />
              </Flex>
              <Text as="dd" color="brand.white">
                +45 38 88 12 00
              </Text>
            </Flex>
            <Flex
              as={"dl"}
              alignItems={"center"}
              gap="0.8rem"
              mt={"2rem"}
              mb={"0.8rem"}
            >
              <Text as="dt" color="brand.white">
                CVR
              </Text>

              <Text as="dd" color="brand.white">
                49737017
              </Text>
            </Flex>
            <Flex as={"dl"} alignItems={"center"} gap="0.8rem">
              <Text as="dt" color="brand.white">
                Konto
              </Text>

              <Text as="dd" color="brand.white">
                7436 2005170
              </Text>
            </Flex>
          </Box>

          <Box maxW={"18rem"}>
            <Text
              mb={"1rem"}
              fontWeight={"bold"}
              color={"brand.white"}
              fontSize="smallH"
            >
              Åbningstider
            </Text>
            <Box
              as={"dl"}
              alignItems={"center"}
              display="grid"
              gridTemplateColumns="1fr 2fr"
              gap="0.8rem"
              mb={"0.8rem"}
            >
              <Text as="dt" color="brand.white">
                Man-Tors:
              </Text>

              <Text as="dd" color="brand.white">
                10:00-15:00
              </Text>
            </Box>
            <Box
              as={"dl"}
              alignItems={"center"}
              gap="0.8rem"
              display="grid"
              gridTemplateColumns="1fr 2fr"
            >
              <Text as="dt" color="brand.white">
                Fredag:
              </Text>

              <Text as="dd" color="brand.white">
                10:00-14:00
              </Text>
            </Box>
            <Box
              as={"dl"}
              display="grid"
              gap="0.8rem"
              mt={{ base: "2rem", md: "1.5rem" }}
              mb={"0.8rem"}
            >
              <Text
                as="dt"
                color="brand.white"
                fontSize="smallH"
                fontWeight={"bold"}
              >
                Adresse
              </Text>

              <Text as="dd" color="brand.white">
                Sandager 11, 2605 Brøndby
              </Text>
            </Box>
          </Box>

          <Box>
            <Text
              color="brand.white"
              fontSize="smallH"
              fontWeight={"bold"}
              mb={"0.8rem"}
            >
              Følg os
            </Text>
            <Flex alignItems="center">
              <NextLink href={"https://www.facebook.com/KattensVaern"} passHref>
                <Link isExternal justifyContent={"center"} alignItems="center">
                  <Icon
                    aria-label="Facebook"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    color="brand.white"
                    w={9}
                    h={9}
                    as={AiOutlineFacebook}
                  />
                </Link>
              </NextLink>
              <NextLink
                href={"https://www.instagram.com/kattensvaern/"}
                passHref
              >
                <Link
                  isExternal
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems="center"
                  mr="4px"
                >
                  <Icon
                    aria-label="Instagram"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    color="brand.white"
                    w={10}
                    h={10}
                    as={AiOutlineInstagram}
                  />
                </Link>
              </NextLink>
              <NextLink href={"https://www.tiktok.com/@kattensvaern"} passHref>
                <Link
                  isExternal
                  borderRadius={"0.2rem"}
                  border={"2px solid white"}
                  px="0.2rem"
                  py="0.2rem"
                  mr="4px"
                >
                  <Icon
                    aria-label="TikTok"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    color="brand.white"
                    w={5}
                    h={5}
                    as={FaTiktok}
                  />
                </Link>
              </NextLink>
              <NextLink href={"https://www.youtube.com/KattensVaern"} passHref>
                <Link
                  isExternal
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Icon
                    aria-label="Youtube"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    color="brand.white"
                    w={10}
                    h={10}
                    as={AiOutlineYoutube}
                  />
                </Link>
              </NextLink>
            </Flex>
          </Box>
        </Flex>

        <Flex
          fontSize={"xxs"}
          color="brand.white"
          flexDir={{ base: "column", md: "row-reverse" }}
          justify={{ md: "space-between" }}
          gap="1rem"
          pt={{ base: "4rem", md: "2rem" }}
          pb={{ base: "2rem", md: "0" }}
        >
          <Flex gap={"1rem"}>
            <NextLink
              href={
                "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/persondata_forordning_maj_18_1.pdf"
              }
              passHref
            >
              <Link isExternal variant={"clean"}>
                Persondatapolitik
              </Link>
            </NextLink>
            <NextLink
              href={
                "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-content/uploads/2022/12/cookies-politik.pdf"
              }
              passHref
            >
              <Link isExternal variant={"clean"}>
                Cookiepolitik
              </Link>
            </NextLink>
          </Flex>
          <Text>©Pizzapigerne 2022</Text>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
