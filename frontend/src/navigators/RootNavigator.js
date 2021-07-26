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
import DrawerItems from "./DrawerItems";
import { displayName as appName } from "../../app.json";
import ReportProblem from "../screens/ReportProblem";
import AboutUs from "../screens/AboutUs";
import { useTheme } from "react-native-paper";


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


const HomeScreenStack = ({ navigation }) => {
  const theme = useTheme()

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: appName,
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
      <Stack.Screen
        name="ReportProblem"
        options={{ title: "Report a problem" }}
        component={ReportProblem}
      />
      <Stack.Screen
        name="AboutUs"
        options={{ title: "About us" }}
        component={AboutUs}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <Icon size={size} color={color} name="home" />
          ),
        }}
        component={HomeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
