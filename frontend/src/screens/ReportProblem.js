import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text
} from "react-native";


const ReportProblem = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Name</Text>
          <Text>Email</Text>
          <Text>Description</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportProblem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0
  },
});
