const button = {
  baseStyle: {
    borderRadius: "0.1rem",
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

    mobileFilterBtn: {
      color: "brand.blue",
      bg: "brand.white",
      fontWeight: "normal",
      py: "2.4rem",
      px: "3.5rem",
      fontSize: "smallH",
      display: "flex",
      alignItems: "center",
      width: "100%",
      textAlign: "left",
      justifyContent: "space-between",

      _hover: {
        transform: "scale(1)",
      },
    },

    redBtn: {
      bg: "brand.redCta",
      fontSize: "smallH",
      py: "1.6rem",

      _hover: {
        bg: "brand.redHover",
      },
    },
    blueBtn: {
      bg: "brand.blueCta",
      fontSize: "smallH",
      py: "1.6rem",

      _hover: {
        bg: "brand.blueHover",
      },
    },
  },
};

export default button;
