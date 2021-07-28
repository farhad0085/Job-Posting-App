import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import { ageCalculator } from "../utils/ageCalculator";


const AgeCalculator = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState("01-01-1999");
  const [secondDate, setSecondDate] = useState(new Date());
  const [age, setAge] = useState("");
  const theme = useTheme()

  const styles = getStyles(theme)

  const calculateAge = () => {
    const dob = new Date(moment(dateOfBirth, "DD-MM-YYYY"))
    const second = new Date(moment(secondDate, "DD-MM-YYYY"))
    const ageText = ageCalculator(dob, second)
    setAge(ageText)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Calculate your age</Text>

          <View>
            <Text>Date of birth</Text>
            <DatePicker
              style={styles.picker}
              placeholder="Select a date"
              date={dateOfBirth}
              format="DD-MM-YYYY"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 4,
                  top: 4,
                  marginLeft: 0,
                },
              }}
              onDateChange={(date) => setDateOfBirth(date)}
            />
          </View>
          <View>
            <Text>Today</Text>
            <DatePicker
              style={styles.picker}
              placeholder="Select a date"
              date={secondDate}
              format="DD-MM-YYYY"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 4,
                  top: 4,
                  marginLeft: 0,
                },
              }}
              onDateChange={(date) => setSecondDate(date)}
            />
          </View>
          <Button
            disabled={!!!dateOfBirth || !!!secondDate}
            onPress={calculateAge}
            style={styles.calculateButton}
            mode="contained"
          >
            Calculate
          </Button>
          {!!age && (
            <View style={{ marginTop: 5}}>
              <Text>Your age at {moment(secondDate).format("DD MMM, YYYY")}:</Text>
              <Text style={styles.ageText}>{age}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgeCalculator;

const getStyles = theme => StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    opacity: 0.7,
    marginBottom: 5,
  },
  picker: {
    width: 250,
  },
  calculateButton: {
    marginTop: 5,
  },
  ageText: {
    fontSize: 20,
    color: theme.colors.primary
  }
});
