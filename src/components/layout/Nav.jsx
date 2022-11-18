import NextLink from "next/link";
import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import cart from "../../assets/svgs/cart.svg";
import NavGroup from "./NavGroup";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Link,
} from "@chakra-ui/react";

function Nav({ children }) {
  const navData = [
    {
      titel: "Adopter",
      subTitel: [
        { navn: "Se kattene", link: "/adopter/adoptionskatte" },
        { navn: "Praktisk info", link: "/adopter/praktisk-info" },
      ],
    },
    {
      titel: "Gør en forskel",
      subTitel: [
        { navn: "Doner", link: "/gor-en-forskel/doner" },
        { navn: "Bliv medlem", link: "/gor-en-forskel/bliv-medlem" },
        {
          navn: "Bliv plejefamilie",
          link: "/gor-en-forskel/bliv-plejefamilie",
        },
        { navn: "Sponsorer", link: "/gor-en-forskel/sponsorer" },
        {
          navn: "Kattene i testamentet",
          link: "/gor-en-forskel/kattene-i-testamentet",
        },
      ],
    },
    {
      titel: "Efterlysning",
      subTitel: [
        { navn: "Jeg har mistet min kat", link: "/efterlysning/mistet-kat" },
        { navn: "Efterlys en kat", link: "/efterlysning/efterlys-kat" },
        { navn: "Efterlyste katte", link: "/efterlysning/efterlyste-katte" },
      ],
    },
    {
      titel: "Indberetning",
      subTitel: [
        { navn: "Jeg har fundet en kat", link: "/indberetning/fundet-kat" },
        { navn: "Fremlys kat", link: "/indberetning/fremlys-kat" },
        { navn: "Fremlyste katte", link: "/indberetning/fremlyste-katte" },
      ],
    },
    {
      titel: "Katteklinikker",
      subTitel: [
        { navn: "Aalborg", link: "/katteklinikker/aalborg" },
        { navn: "Billund", link: "/katteklinikker/billund" },
        { navn: "Brøndby", link: "/katteklinikker/brondby" },
        { navn: "Slagelse", link: "/katteklinikker/slagelse" },
      ],
    },
    {
      titel: "Om os",
      subTitel: [
        { navn: "Internater og åbningstider", link: "/om-os/internater" },
        { navn: "Vores arbejde", link: "/om-os/vores-arbejde" },
        { navn: "Hvad går pengene til?", link: "/om-os/penge-til" },
        { navn: "Medarbejerne", link: "/om-os/medarbejderne" },
      ],
    },
  ];

  return (
    <>
      <Box
        as={"header"}
        boxShadow="0 8px 6px -6px #EEEEEE"
        px={"2rem"}
        py="0.6rem"
      >
        <Flex as={"nav"} justifyContent="space-between" alignItems={"center"}>
          <Flex gap="1rem">
            <Box pr={"1rem"}>
              <Image src={logo} alt={"logo"} height={50} width={50} />
            </Box>

            <Flex gap={"2.5rem"}>
              {navData.map((li) => (
                <NavGroup key={li.titel} {...li} />
              ))}
            </Flex>
          </Flex>

          <Flex gap={"1rem"}>
            <NextLink href={"https://kattens-vaern-butik.dk/"} passHref>
              <Link isExternal target="_blank">
                <Image src={cart} alt={"logo"} height={40} width={40} />
              </Link>
            </NextLink>

            <NextLink href={`/stottemuligheder`} passHref>
              <Link variant={"redBtn"}>Støt kattene</Link>
            </NextLink>
          </Flex>
        </Flex>
      </Box>

      {/*   <Link href="/">Home</Link>
              <Link href="/adopter/adoptionskatte">Se kattene</Link> */}

      {children}
    </>
  );
}

export default Nav;
