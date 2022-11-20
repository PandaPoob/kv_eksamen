import NextLink from "next/link";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Accordion,
  Link,
  IconButton,
} from "@chakra-ui/react";
import logo from "../../assets/svgs/logo.svg";
import NavMobileGroup from "./NavMobileGroup";
import { BsXLg, BsChevronRight } from "react-icons/bs";

function NavDrawer({ navData, isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
          px={"2rem"}
          py="0.6rem"
        >
          <NextLink href={`/`} passHref>
            <Link alignItems={"center"} display="flex">
              <Image src={logo} alt={"logo"} height={50} width={50} />
            </Link>
          </NextLink>

          <IconButton
            bg={"none"}
            color="brand.blue"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            onClick={onClose}
            aria-label="Close menu"
            icon={<BsXLg />}
          />
        </DrawerHeader>

        <DrawerBody pt={0}>
          <Accordion allowToggle>
            {navData.map((ul) => (
              <NavMobileGroup key={ul.titel} {...ul} onClose={onClose} />
            ))}
          </Accordion>

          <NextLink href={"https://kattens-vaern-butik.dk/"} passHref>
            <Link
              variant={"clean"}
              isExternal
              target="_blank"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems="center"
              fontWeight={"medium"}
              fontSize={"sm"}
              py={"1.5rem"}
              px={"1rem"}
              mr={"0.4rem"}
            >
              Se webshoppen
              <BsChevronRight size={24} />
            </Link>
          </NextLink>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavDrawer;
