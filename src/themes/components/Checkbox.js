const Checkbox = {
  baseStyle: {
    icon: {
      color: "brand.blue",
    },
    control: {
      border: "1px solid",
      borderColor: "brand.borderGrey",
      borderRadius: "0.1rem",
      w: "1.5rem",
      h: "1.5rem",
      justifySelf: "flex-end",
      position: "relative",
      bg: "brand.white",
      _disabled: {
        borderColor: "brand.borderGrey",
        bg: "gray.200",
      },
      _checked: {
        borderColor: "brand.borderGrey",
        bg: "brand.white",
        _hover: {
          borderColor: "brand.borderGrey",
          bg: "brand.white",
        },
      },
      _hover: {
        borderColor: "brand.borderGrey",
        bg: "brand.white",
      },
      _focusVisible: {
        boxShadow: "none",
      },
    },
    label: {
      fontWeight: "normal",
      color: "brand.blue",
      fontSize: "xs",

      /*      _checked: {
        color: "brand.white",
      }, */
    },
  },
  variants: {
    formCheck: {
      label: {
        fontWeight: "normal",
        color: "brand.blue",
        fontSize: "xs",

        _checked: {
          color: "brand.white",
        },
      },
    },
  },

  defaultProps: {
    // Reset props
    size: null,
    variant: null,
  },
};

export default Checkbox;
