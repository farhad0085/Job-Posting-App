import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import AwesomeAlert from "react-native-awesome-alerts";
import RootNavigator from "./src/navigators/RootNavigator";

const App = () => {
  const netInfo = useNetInfo();
  const [isNetConnected, setIsNetConnected] = useState(true);

  useEffect(() => {
    setIsNetConnected(netInfo.isConnected);
  }, [netInfo.isConnected]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {netInfo.isConnected === false && (
        <AwesomeAlert
          show={isNetConnected === false}
          showProgress={false}
          title="You're offline"
          message="Please connect to internet in order to use this application"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={true}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonColor="green"
          onConfirmPressed={() => setIsNetConnected(true)}
        />
      )}

      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
