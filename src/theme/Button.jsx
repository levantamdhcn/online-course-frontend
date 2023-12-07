const Button = {
  baseStyle: {
    _hover: {
      textDecor: "none",
      opacity: "0.8",
      "[disabled]": {
        opacity: "0.4",
      },
    },
    _focus: {
      textDecor: "none",
      opacity: "0.8",
    },
  },
  sizes: {
    md: {
      fontSize: "14px"
    },
  },
  variants: {
    outline: {
      borderColor: "primary.500",
      color: "primary.500",
    },
    primary: {
      bgColor: "primary.500",
      color: "white",
      _hover: {
        "&[disabled]": {
          background: "primary.500",
        },
      },
    },
    secondary: {
      bgColor: "white",
      color: "black",
    },
    "primary-alpha": {
      bgColor: "primary.50",
      color: "primary.500",
      fontWeight: "500",
    },
    base: {
      bgColor: "neutral.50",
      color: "neutral.500",
    },
    "primary-text": {
      bgColor: "unset",
      color: "primary.500",
    },

    tableAction: {
      color: "#2F69FF" ,
      fontSize: "14px",
      fontWeight: "500",
      _hover: {
        opacity: .8
      },
    },
    "success-outline":{
      border:"1px solid",
      borderColor: "success.500",
      color: "success.500",
    }
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
