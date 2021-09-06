import { DefaultTheme } from "react-native-paper";

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "yellow",
    text: "black",
    background: "rgb(241, 241, 241)",
    icon: "green",
    loadingIndicator: "green",
    button: "green",
    placeholder: "rgb(120, 120, 120)",
  },
  card: {
    colors: {
      background: "white",
      text: "black",
      touchHover: "#ddd"
    }
  }
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "yellow",
    background: "rgb(28, 28, 28)",
    text: "white",
    icon: "green",
    loadingIndicator: "green",
    button: "green",
    placeholder: 'rgb(120, 120, 120)'
  },
  card: {
    colors: {
      background: "black",
      text: "white",
      touchHover: "rgb(78, 78, 78)"
    }
  }
}

