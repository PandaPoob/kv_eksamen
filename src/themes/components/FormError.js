import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleText = defineStyle({
  color: "brand.errorMsg",
  mt: "0.4rem",
  fontSize: "xxs",
  lineHeight: "normal",
  fontStyle: "italic",
  justifyContent: "flex-end",
});

const baseStyle = definePartsStyle({
  text: baseStyleText,
});

export const formErrorTheme = defineMultiStyleConfig({
  baseStyle,
});
