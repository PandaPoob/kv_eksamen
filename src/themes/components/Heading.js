const baseStyle = {
  fontFamily: "heading",
  fontWeight: "normal",
};

const sizes = {
  heading1: {
    fontSize: ["3xl", null, null, null, "4xl"],
  },

  heading2: {
    fontSize: ["xl", null, null, null, "xxl"],
  },

  heading3: {
    fontSize: ["md", null, null, null, "lg"],
    fontFamily: "body",
    fontWeight: "bold",
  },

  heading4: {
    fontSize: "sm",
    fontFamily: "body",
    fontWeight: "bold",
  },

  heading5: {
    fontSize: ["smallH", null, null, null, "sm"],
    fontFamily: "body",
    fontWeight: "bold",
  },

  heading6: {
    fontSize: "xs",
    fontFamily: "body",
    fontWeight: "bold",
  },
};

const defaultProps = {
  size: "xl",
};

const heading = {
  baseStyle,
  sizes,
  defaultProps,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default heading;
