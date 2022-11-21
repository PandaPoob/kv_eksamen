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
    navTitle: {
      fontWeight: "bold",
    },

    carouselBtn: {
      bg: "none",
      color: "brand.blue",
      fontSize: "xxs",

      _hover: {
        textDecoration: "underline",
        transform: "scale(1)",
      },
    },

    filterBtn: {
      bg: "none",

      _hover: {
        transform: "scale(1)",
      },
    },

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
