import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

const AboutUs = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text>About us</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0,
  },
});
