import { TypographyVariantsOptions } from "@mui/material/styles";

const Typography = (): TypographyVariantsOptions => ({
  htmlFontSize: 16,
  fontFamily: "Outfit, sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 600,
    fontSize: "2.375rem",
    lineHeight: 1.21,
  },
  h2: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: 1.27,
  },
  h3: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.33,
  },
  h4: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h5: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  h6: {
    fontFamily: "Saira, sans-serif",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  caption: {
    fontFamily: "Outfit, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  body1: {
    fontFamily: "Outfit, sans-serif",
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  body2: {
    fontFamily: "Outfit, sans-serif",
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  subtitle1: {
    fontFamily: "Saira, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontFamily: "Saira, sans-serif",
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    fontFamily: "Outfit, sans-serif",
    textTransform: "capitalize",
  },
});

export default Typography;
