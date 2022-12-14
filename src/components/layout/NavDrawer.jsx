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
import NavMobileGroup from "./NavMobileGroup";
import { BsXLg, BsChevronRight, BsBoxArrowUpRight } from "react-icons/bs";

function NavDrawer({ navData, isOpen, onClose, onCloseMenu }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={"full"}
      onCloseMenu={onCloseMenu}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
          px={"2rem"}
          py="0.6rem"
        >
          <NextLink href={`/`} passHref prefetch={false}>
            <Link alignItems={"center"} display="flex">
              <Image src={"/logo.svg"} alt={"logo"} height={50} width={50} />
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

          <NextLink
            href={"https://kattens-vaern-butik.dk/"}
            passHref
            prefetch={false}
          >
            <Link
              variant={"exLink"}
              isExternal
              target="_blank"
              display={"flex"}
              gap="1rem"
              alignItems="center"
              fontWeight={"medium"}
              fontSize={"smallH"}
              py={"1.5rem"}
              px={"1rem"}
              mr={"0.4rem"}
            >
              Se webshoppen
            </Link>
          </NextLink>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavDrawer;
