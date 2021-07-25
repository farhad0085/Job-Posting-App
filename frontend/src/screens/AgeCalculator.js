import React, {useEffect} from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import { Grid } from "react-native-paper-grid";


const AgeCalculator = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.cardsContainer}>
          <Text>Age calculator</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgeCalculator;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
