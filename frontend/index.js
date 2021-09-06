import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import SplashScreen from "react-native-splash-screen";
import { darkTheme, defaultTheme } from "./theme";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_THEME } from "./src/store/actions/actionTypes";
import { retrieveData } from "./src/utils/storage";

const RNPaperProvider = ({ children }) => {
  const themeStore = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveData("@theme").then((value) => {
      if (value == "dark") {
        dispatch({ type: TOGGLE_THEME, payload: value });
      }
    });
  }, []);

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
