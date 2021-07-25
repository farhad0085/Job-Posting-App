import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import AgeCalculator from "../screens/AgeCalculator";
import MedicalJobs from "../screens/MedicalJobs";
import OtherJobs from "../screens/OtherJobs";
import GeneralPost from "../screens/GeneralPost";
import TipsAndTricks from "../screens/TipsAndTricks";
import NoticeAndInfo from "../screens/NoticeAndInfo";
import Favourites from "../screens/Favourites";
import SinglePost from "../screens/SinglePost";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon style={{ paddingLeft: 10 }} name="menu" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "green",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "BD Medical Jobs",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="MedicalJobs"
        component={MedicalJobs}
        options={{ title: "Medical Jobs" }}
      />
      <Stack.Screen
        name="OtherJobs"
        component={OtherJobs}
        options={{ title: "Other Jobs" }}
      />
      <Stack.Screen
        name="GeneralPost"
        component={GeneralPost}
        options={{ title: "General" }}
      />
      <Stack.Screen
        name="TipsAndTricks"
        component={TipsAndTricks}
        options={{ title: "Tips & Tricks" }}
      />
      <Stack.Screen
        name="NoticeAndInfo"
        component={NoticeAndInfo}
        options={{ title: "Notice & Info" }}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{ title: "Favourites" }}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="AgeCalculator"
        options={{ title: "Age Calculator" }}
        component={AgeCalculator}
      />
    </Stack.Navigator>
  );
}

const AgeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="AgeCalculator"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="AgeCalculator"
        component={AgeCalculator}
        options={{
          title: "Age Calculator",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: { marginVertical: 5 },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: "Home" }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="AgeCalculator"
        options={{ drawerLabel: "Age Calculator" }}
        component={AgeScreenStack}
      />
    </Drawer.Navigator>
  );
}

export default RootNavigator;
