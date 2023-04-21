import { PaletteColorOptions } from "@mui/material/styles";

import { defaultColors } from "Constants";

const DefaultColors = () => {
  const { red, gold, cyan, green, grey } = defaultColors;
  const greyColors: PaletteColorOptions = {
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
  };
  const contrastText = "#060606";
  const torquise = [
    "#e6fff9",
    "#a3ffee",
    "#7affeb",
    "#52ffeb",
    "#27f2e1",
    "#00e6da",
    "#00bfbc",
    "#009699",
    "#006d73",
    "#00464d",
  ];

  return {
    primary: {
      light: torquise[3],
      main: torquise[5],
      dark: torquise[6],
      contrastText,
    },
    secondary: {
      light: greyColors[300],
      main: greyColors[500]!,
      dark: greyColors[700],
    },
    error: {
      light: red[2],
      main: red[4],
      dark: red[7],
      contrastText,
    },
    warning: {
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      contrastText: greyColors[100],
    },
    info: {
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      contrastText,
    },
    success: {
      light: green[3],
      main: green[5],
      dark: green[7],
      contrastText,
    },
    grey: greyColors,
  };
};

export default DefaultColors;
