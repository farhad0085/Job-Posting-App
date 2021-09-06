import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import SplashScreen from "react-native-splash-screen";
import { darkTheme, defaultTheme } from "./theme";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";


const RNPaperProvider = ({ children }) => {
  const themeStore = useSelector((state) => state.theme);

  return (
    <PaperProvider theme={themeStore.isDarkTheme ? darkTheme : defaultTheme}>
      {children}
    </PaperProvider>
  );
};

export default function Main() {
  // Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <StoreProvider store={store}>
      <RNPaperProvider>
        <App />
      </RNPaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
