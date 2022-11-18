import NextLink from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

function NavGroup({ titel, subTitel }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isLazy isOpen={isOpen}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        {titel}
      </MenuButton>
      <MenuList
        position={"relative"}
        zIndex={"-1"}
        mt={"-0.5rem"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {subTitel.map((li) => (
          <NextLink key={li.navn} href={li.link} passHref>
            <Link variant={"clean"} onClick={onClose}>
              <MenuItem>{li.navn}</MenuItem>
            </Link>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  );
}

export default NavGroup;
