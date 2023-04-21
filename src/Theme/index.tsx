import { ReactNode, useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  TypographyVariantsOptions,
} from "@mui/material/styles";

import Palette from "./palette";
import Typography from "./typography";
import { useSelector } from "Redux";

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { mode } = useSelector((state) => state.app);

  const theme: Theme = useMemo<Theme>(() => Palette(mode), [mode]);

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(),
    []
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      typography: themeTypography,
    }),
    [theme, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  // will implement if needed
  // themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
