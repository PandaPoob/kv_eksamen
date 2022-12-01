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
      borderRadius: "0.2rem",
      textAlign: "center",
      color: "brand.white",
      fontWeight: "semibold",
      transition: "all .2s ease-in-out",
      py: "0.7rem",
      px: "1.5rem",

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
      py: "0.7rem",
      px: "1.5rem",

      _hover: {
        bg: "brand.blueHover",
        transform: "scale(1.1)",
        textDecoration: "none",
      },
    },
    greyArticle: {
      display: "flex",
      as: "article",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      bg: "brand.lightGrey",
      width: "20rem",
      heigth: "12rem",
      fontSize: "xs",
      borderRadius: "0.3rem",
      textAlign: "center",
      color: "brand.darkGrey",
      gap: "1rem",
      fontWeight: "bold",
      transition: "all .2s ease-in-out",
      p: "2rem",
      _hover: {
        transform: "scale(1.02)",
        textDecoration: "none",
      },
    },
  },
};

export default link;
