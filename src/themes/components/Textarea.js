import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top",
  fontSize: "xs",
});

const variants = {
  form: {
    fontSize: "xs",
    color: "brand.blue",
    borderRadius: "0.2rem",
    border: "1px solid",
    borderColor: "brand.borderGrey",
    minHeight: "8rem",

    resize: "none",
    _hover: {
      borderColor: "brand.borderGrey",
      boxShadow: "0 0 0 1px #032C53",
    },
    _focus: {
      borderColor: "brand.borderGrey",
      boxShadow: "0 0 0 1px #032C53",
    },
    _focusVisible: {
      borderColor: "brand.borderGrey",
      boxShadow: "0 0 0 1px #032C53",
    },
    _invalid: {
      borderColor: "brand.errorMsg",
      boxShadow: "none",
      fontSize: "xs",
    },
  },
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: "lg",
    variant: "outline",
  },
});
