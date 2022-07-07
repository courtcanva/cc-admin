import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.800" : "orange.50",
      },
    }),
  },
};

const colors = {
  brand: {
    primary: "#344C5C",
    secondary: "#40B484",
    primaryLight: "#496A80",
  },
  background: {
    primary: "#363740",
    secondary: "#4f5757",
    tertiary: "#EDF2F7",
  },
  fontcolor: {
    primary: "#A4A6B3",
    secondary: "#1A202C",
    tertiary: "#4285f4",
  },
  button: {
    hover: "rgba(159, 162, 180, 0.3)",
    active: "#699D88",
  },
};

const components = {
  CourtSize: {
    baseStyle: () => ({
      width: "255",
      height: "205",
      border: "4px solid #344C5C",
      fontSize: "lg",
      fontWeight: "semibold",
      color: "#344C5C",
      textAlign: "center",
    }),
  },
};

const theme = extendTheme({
  colors,
  config,
  styles,
  components,
});

export default theme;
