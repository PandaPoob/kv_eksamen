const Select = {
  variants: {
    outline: {
      field: {
        borderRadius: "0.2rem",
        border: "1px solid",
        borderColor: "brand.borderGrey",
        fontSize: "xs",
        _hover: {
          borderColor: "brand.borderGrey",
          boxShadow: "none",
        },
        _focus: {
          borderColor: "brand.borderGrey",
          // boxShadow: "none",
        },
        "> option, > optgroup": {
          borderRadius: 0,
        },
      },
    },
  },
};
export default Select;
