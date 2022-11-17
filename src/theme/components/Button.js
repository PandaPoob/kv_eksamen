const button = {
  baseStyle: {
    borderRadius: "0.2rem",
    textAlign: "center",
    color: "brand.white",
    fontWeight: "semibold",
    transition: "all .2s ease-in-out",

    _hover: {
      transform: "scale(1.1)",
    },
  },

  variants: {
    redBtn: {
      bg: "brand.redCta",
      fontSize: "xs",

      _hover: {
        bg: "brand.redHover",
      },
    },
    blueBtn: {
      bg: "brand.blueCta",
      fontSize: "xs",

      _hover: {
        bg: "brand.blueHover",
      },
    },
  },
};

export default button;
