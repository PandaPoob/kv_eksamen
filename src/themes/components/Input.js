const Input = {
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
          boxShadow: "none",
        },
        _invalid: {
          borderColor: "brand.errorMsg",
          boxShadow: "none",
          fontSize: "xs",
        },
      },
    },
  },
};
export default Input;
