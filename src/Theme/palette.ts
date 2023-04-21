import { alpha, createTheme } from "@mui/material/styles";

import Default from "./default";
import { ThemeMode } from "Types";

const Palette = (mode: ThemeMode) => {
  const paletteColor = Default();

  return createTheme({
    palette: {
      mode,
      common: {
        black: "#060606",
        white: "#fff",
      },
      ...paletteColor,
      ...(mode === "light"
        ? {
            text: {
              primary: "#262626",
              secondary: "#8c8c8c",
              disabled: "#bfbfbf",
            },
            action: {
              disabled: "#d9d9d9",
            },
            divider: "#f0f0f0",
            background: {
              paper: "#ffffff",
              default: "#fafafb",
            },
          }
        : {
            text: {
              primary: "#FFFFFF",
              secondary: "#e4e4e4",
              disabled: alpha("#ffffff"!, 0.1),
            },
            action: {
              disabled: "#8c8c8c ",
            },
            divider: alpha("#ffffff"!, 0.05),
            background: {
              paper: "#1e1e1e",
              default: "#121212",
            },
          }),
    },
  });
};

export default Palette;
