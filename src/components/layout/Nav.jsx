import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/svgs/logo.svg";
import NavGroup from "./NavGroup";
import { BsCart3, BsList } from "react-icons/bs";
import {
  useDisclosure,
  Flex,
  Box,
  Link,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

const MobileMenuDrawer = dynamic(() => import("./NavDrawer"), {
  ssr: false,
});

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
        { navn: "Medarbejderne", link: "/om-os/medarbejderne" },
      ],
    },
  ];
  const isMobile = useBreakpointValue({ base: true, navbp: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  //hide and show menu depending on scroll
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  return (
    <>
      <Box
        as={"header"}
        boxShadow="0 1px 8px -4px #737373"
        px={{ base: "1rem", md: "2rem" }}
        py="0.6rem"
        bg={"brand.white"}
        zIndex={"10"}
        position={"fixed"}
        w={"100%"}
        top={hidden ? "-5rem" : "0"}
        left={0}
        transition={"top 0.3s"}
      >
        {isMobile ? (
          <Flex as={"nav"} justifyContent="space-between">
            <NextLink href={`/`} passHref>
              <Link>
                <Image src={logo} alt={"logo"} height={50} width={50} />
              </Link>
            </NextLink>

            <Flex alignItems={"center"} gap="1rem">
              <NextLink href={`/stottemuligheder`} passHref>
                <Link variant={"redBtn"}>Støt kattene</Link>
              </NextLink>

              <IconButton
                onClick={onOpen}
                aria-label="Open menu"
                color={"brand.blue"}
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                icon={<BsList size={45} />}
              />
              <MobileMenuDrawer
                navData={navData}
                isOpen={isOpen}
                onClose={onClose}
              />
            </Flex>
          </Flex>
        ) : (
          <Flex as={"nav"} justifyContent="space-between" alignItems={"center"}>
            <Flex gap="1rem">
              <Box pr={"1rem"}>
                <NextLink href={`/`} passHref>
                  <Link>
                    <Image src={logo} alt={"logo"} height={50} width={50} />
                  </Link>
                </NextLink>
              </Box>

              <Flex gap={"2.5rem"}>
                {navData.map((li) => (
                  <NavGroup key={li.titel} {...li} />
                ))}
              </Flex>
            </Flex>

            <Flex gap={"1rem"}>
              <NextLink href={"https://kattens-vaern-butik.dk/"} passHref>
                <Link isExternal target="_blank" alignSelf={"center"}>
                  <IconButton
                    bg={"none"}
                    color="brand.blue"
                    _hover={{ bg: "none" }}
                    _focus={{ bg: "none" }}
                    aria-label="Go webshop"
                    icon={<BsCart3 />}
                  />
                </Link>
              </NextLink>

              <NextLink href={`/stottemuligheder`} passHref>
                <Link variant={"redBtn"}>Støt kattene</Link>
              </NextLink>
            </Flex>
          </Flex>
        )}
      </Box>

      {children}
    </>
  );
}

export default Nav;
