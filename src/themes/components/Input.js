const Input = {
  variants: {
    outline: {
      field: {
        borderRadius: "0.2rem",
        border: "1px solid",
        borderColor: "brand.borderGrey",
        fontSize: "xs",
        fontWeight: "normal",
        color: "brand.blue",
        _hover: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _focus: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _focusVisible: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _invalid: {
          borderColor: "brand.errorMsg",
          boxShadow: "none",
          fontSize: "xs",
        },
      },
    },
    date: {
      field: {
        borderRadius: "0.2rem",
        border: "1px solid",
        borderColor: "brand.borderGrey",
        fontSize: "xs",
        color: "brand.blue",
        _hover: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _focus: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _focusVisible: {
          borderColor: "brand.borderGrey",
          boxShadow: "0 0 0 1px #032C53",
        },
        _invalid: {
          borderColor: "brand.errorMsg",
          boxShadow: "none",
          fontSize: "xxs",
        },
      },
    },

    clean: {
      field: {
        borderRadius: "0.2rem",
        border: "none",
        bg: "brand.white",
        fontSize: "xxs",
        color: "brand.blue",
        _hover: {
          boxShadow: "none",
        },
        _focus: {
          boxShadow: "none",
        },
        _focusVisible: {
          //borderColor: "brand.borderGrey",
          boxShadow: "none",
        },
        _invalid: {
          borderColor: "brand.errorMsg",
          boxShadow: "none",
          fontSize: "xxs",
        },
      },
    },
  },
};
export default Input;
