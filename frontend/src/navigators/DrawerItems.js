import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Linking, BackHandler, Alert, View, StyleSheet, Text, ToastAndroid } from "react-native";
import { Grid, Row, Col } from "react-native-paper-grid";
import {Title } from 'react-native-paper'
import {displayName as appName} from '../../app.json';

const backPressed = () => {
  Alert.alert(
    "Exit App",
    "Do you want to exit?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
  return true;
};

const DrawerItems = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Title style={styles.title}>{appName}</Title>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="About Us"
        icon={({ focused, color, size }) => (
          <FontAwesomeIcons color={color} size={size} name="users" />
        )}
      />
      <DrawerItem
        label="Rate us on Play Store"
        onPress={() => ToastAndroid.show("Coming soon...", ToastAndroid.SHORT)}
        icon={({ focused, color, size }) => (
          <Ionicons color={color} size={size} name="logo-google-playstore" />
        )}
      />
      <DrawerItem
        label="Report a problem"
        onPress={() => ToastAndroid.show("Coming soon...", ToastAndroid.SHORT)}
        icon={({ focused, color, size }) => (
          <MaterialIcons color={color} size={size} name="report" />
        )}
      />
      <DrawerItem
        label="Exit"
        icon={({ focused, color, size }) => (
          <Ionicons
            color={color}
            size={size}
            name={focused ? "exit" : "exit-outline"}
          />
        )}
        onPress={backPressed}
      />
      <View>
        <Text style={styles.connectText}>Connect with us</Text>
        <Grid>
          <Row>
            <Col>
              <Ionicons
                size={42}
                style={styles.facebookIcon}
                name="logo-facebook"
              />
            </Col>
            <Col>
              <Ionicons
                size={42}
                style={styles.youtubeIcon}
                name="logo-youtube"
              />
            </Col>
            <Col>
              <MaterialCommunityIcons
                size={42}
                style={styles.webIcon}
                name="web"
              />
            </Col>
            <Col>
              <MaterialCommunityIcons
                size={42}
                style={styles.bloggerIcon}
                name="blogger"
              />
            </Col>
          </Row>
        </Grid>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerItems;

const styles = StyleSheet.create({
  facebookIcon: {
    color: "#38529A",
  },
  youtubeIcon: {
    color: "#CD0F1A",
  },
  webIcon: {
    color: "#188DC9",
  },
  bloggerIcon: {
    color: "#F76C41",
  },
  connectText: {
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    opacity: 0.6,
    fontWeight: "bold"
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 5,
  }
});
