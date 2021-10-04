import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "../store/actions/actionTypes";

const HeaderRight = ({ onRefresh, hideReload }) => {
  const dispatch = useDispatch();
  const themeStore = useSelector((state) => state.theme);

  const onThemeChange = () => {
    dispatch({
      type: TOGGLE_THEME,
      payload: themeStore.isDarkTheme ? "default" : "dark",
    });
  };

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {!hideReload && (
        <TouchableOpacity onPress={() => onRefresh()}>
          <Ionicons
            style={{ marginRight: 10 }}
            name="reload-circle-sharp"
            size={32}
            color="#fff"
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => onThemeChange()}>
        <Ionicons
          style={{ marginRight: 10 }}
          name={themeStore.isDarkTheme ? "md-sunny-sharp" : "moon"}
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
