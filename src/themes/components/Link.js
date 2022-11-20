const link = {
  variants: {
    clean: {
      display: "flex",
      alignItems: "center",
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
      display: "flex",
      alignItems: "center",
      bg: "brand.redCta",
      fontSize: "xs",
      borderRadius: "0.1rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "semibold",
      transition: "all .2s ease-in-out",
      py: "0.5rem",
      px: "1.5rem",
      minH: "3rem",

      _hover: {
        bg: "brand.redHover",
        transform: "scale(1.1)",
        textDecoration: "none",
      },
    },
    blueBtn: {
      display: "flex",
      alignItems: "center",
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
