import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

const AgeCalculator = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.comingSoon}>
          <Text>Coming Soon...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgeCalculator;

const styles = StyleSheet.create({
  comingSoon: {
    marginLeft: "50%",
    transform: [{ translateX: -50 }],
  },
});
