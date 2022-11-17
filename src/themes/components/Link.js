const link = {
  variants: {
    clean: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },

    exLink: {
      textDecoration: "underline",

      _hover: {
        textDecoration: "none",
      },
    },

    inLink: {
      fontWeight: "bold",

      _hover: {
        textDecoration: "none",
      },
    },

    redBtn: {
      bg: "brand.redCta",
      fontSize: "xs",
      borderRadius: "0.2rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "semibold",
      transition: "all .2s ease-in-out",
      py: "0.5rem",
      px: "1rem",

      _hover: {
        bg: "brand.redHover",
        transform: "scale(1.1)",
        textDecoration: "none",
      },
    },
    blueBtn: {
      bg: "brand.blueCta",
      fontSize: "xs",
      borderRadius: "0.2rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "semibold",
      transition: "all .2s ease-in-out",
      py: "0.5rem",
      px: "1rem",

      _hover: {
        bg: "brand.blueHover",
        transform: "scale(1.1)",
        textDecoration: "none",
      },
    },
  },
};

export default link;