import React from 'react'
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HeaderRight = ({ onRefresh }) => {

  const onThemeChange = () => {
    console.log("Clicked on theme change")
  }

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <TouchableOpacity onPress={() => onRefresh()}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="reload-circle-sharp"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onThemeChange()}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="md-sunny-sharp"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )

}


export default HeaderRight