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

      _hover: {
        textDecoration: "none",
        transform: "scale(1)",
        color: "brand.blue",
      },
    },

    filterBtn: {
      bg: "none",

      _hover: {
        transform: "scale(1)",
      },
    },
    openFilter: {
      bg: "brand.white",
      border: "1px solid",
      borderColor: "brand.blue",
      color: "brand.blue",
      fontSize: "smallH",
      borderRadius: "0.2rem",
      maxW: "8rem",

      _hover: {
        transform: "scale(1)",
        bg: "brand.lightGrey",
      },
    },
    clean: {
      bg: "none",
      color: "brand.blue",
      fontSize: "xxs",

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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "brand.redCta",
      fontSize: "xs",
      borderRadius: "0.2rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "medium",
      transition: "all .2s ease-in-out",
      minW: "10rem",
      minH: "3.2rem",
      py: "0.8rem",
      px: "1rem",

      _hover: {
        bg: "brand.redHover",
        transform: "scale(1.04)",
      },
    },
    blueBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "brand.blueCta",
      fontSize: "xs",
      borderRadius: "0.2rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "medium",
      transition: "all .2s ease-in-out",
      minW: "10rem",
      minH: "3.2rem",
      py: "0.8rem",
      px: "1rem",

      _hover: {
        bg: "brand.blueHover",
        transform: "scale(1.04)",
      },
    },

    formSubmitBtn: {
      bg: "brand.redCta",
      fontSize: "smallH",
      py: "1.6rem",

      _hover: {
        bg: "brand.redHover",
        transform: "none",
      },
    },

    breadcrumb: {
      bg: "none",
      color: "brand.blueCta",
      fontSize: { base: "xxs", lg: "xs" },
      fontWeight: "semibold",
      px: { base: "0.2rem", lg: "1rem" },

      _hover: {
        transform: "scale(1)",
      },

      _disabled: {
        cursor: "auto",
      },
    },
  },
};

export default button;
