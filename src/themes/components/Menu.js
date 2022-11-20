import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: "semibold",
    bg: "none",
    color: "brand.blue",
    _hover: {
      bg: "none",
    },
  },
  list: {
    // this will style the MenuList component
    display: "grid",
    gap: "0.5rem",
    p: "0",
    pt: "0.5rem",
    borderRadius: "0.2rem",
    border: "none",
    bg: "brand.white",
    boxShadow: "md",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: "brand.blue",
    _hover: {
      bg: "brand.lightGrey",
      textDecoration: "none",
    },
    _focus: {
      bg: "brand.lightGrey",
      textDecoration: "none",
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    // this will style the MenuDivider component
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted",
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
