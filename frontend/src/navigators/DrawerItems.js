import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Linking } from "react-native";

const DrawerItems = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="About Us"
        icon={({ focused, color, size }) => (
          <FontAwesomeIcons color={color} size={size} name="users" />
        )}
      />
      <DrawerItem
        label="Rate us on Play Store"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
        icon={({ focused, color, size }) => (
          <Ionicons color={color} size={size} name="logo-google-playstore" />
        )}
      />
      <DrawerItem
        label="Report a problem"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
        icon={({ focused, color, size }) => (
          <MaterialIcons color={color} size={size} name="report" />
        )}
      />
      <DrawerItem
        label="Exit"
        icon={({ focused, color, size }) => (
          <Ionicons color={color} size={size} name={focused ? "exit" : "exit-outline"} />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerItems;
