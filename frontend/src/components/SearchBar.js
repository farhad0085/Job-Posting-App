import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {
  const [postId, setPostId] = useState("");
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation()

  const submitHandler = () => {
    navigation.navigate("SearchResult", { postId })
  }

  const SearchIcon = (
    <TextInput.Icon
      onPress={submitHandler}
      color={theme.colors.placeholder}
      style={styles.searchIcon}
      size={28}
      name="magnify"
    />
  )

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        mode="outlined"
        placeholder="Search by box ID..."
        value={postId}
        style={styles.textInputStyle}
        onChangeText={(text) => setPostId(text)}
        right={SearchIcon}
        onSubmitEditing={submitHandler}
      />
    </View>
  );
};

export default SearchBar;

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 5,
      margin: 13,
    },
    textInputStyle: {
      height: 45,
    },
    searchIcon : {
      height: 22.5,
    }
  });
