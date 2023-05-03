import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Pressable } from "react-native";
import { Button, Text, useTheme, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";
// import DatePicker from "react-native-datepicker";
import moment from "moment";
import { calculateDuration } from "../utils/ageCalculator";


const AgeCalculator = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date("1999-01-01"));
  const [secondDate, setSecondDate] = useState(new Date());
  const [age, setAge] = useState("");
  const theme = useTheme()
  const styles = getStyles(theme)
  const [isFirstDateOpened, setIsFirstDateOpened] = useState(false)
  const [isSecondDateOpened, setIsSecondDateOpened] = useState(false)

  const calculateAge = () => {
    const dob = moment(dateOfBirth, "DD-MM-YYYY")
    const second = moment(secondDate, "DD-MM-YYYY")
    const ageText = calculateDuration(dob, second)
    setAge(ageText)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView}>
        
        <View style={styles.container}>
          <Text style={styles.titleText}>Calculate your age</Text>

          <Text>Date of birth</Text>

          <Pressable onPress={() => setIsFirstDateOpened(true)}>
            <View pointerEvents="none">
            <TextInput
              mode="outlined"
              placeholder="Select a date"
              value={moment(dateOfBirth).format("DD MMM, YYYY")}
              style={styles.textInputStyle}
              editable={false}
              left={<TextInput.Icon
                style={styles.dateIcon}
                size={26}
                name="calendar"
              />}
            />
            </View>
          </Pressable>

          <DatePicker
            modal
            mode={"date"}
            open={isFirstDateOpened}
            style={styles.picker}
            date={dateOfBirth}
            confirmText={"Select"}
            onCancel={() => setIsFirstDateOpened(false)}
            onConfirm={(date) => {
              setDateOfBirth(date)
              setIsFirstDateOpened(false)
              setAge("")
            }}
          />

          <Text>Today</Text>

          <Pressable onPress={() => setIsSecondDateOpened(true)}>
            <View pointerEvents="none">
            <TextInput
              mode="outlined"
              placeholder="Select a date"
              value={moment(secondDate).format("DD MMM, YYYY")}
              style={styles.textInputStyle}
              editable={false}
              left={<TextInput.Icon
                style={styles.dateIcon}
                size={26}
                name="calendar"
              />}
            />
            </View>
          </Pressable>

          <DatePicker
            modal
            mode={"date"}
            open={isSecondDateOpened}
            style={styles.picker}
            date={secondDate}
            confirmText={"Select"}
            onCancel={() => setIsSecondDateOpened(false)}
            onConfirm={(date) => {
              setSecondDate(date)
              setIsSecondDateOpened(false)
              setAge("")
            }}
          />


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
              <Text>Your age at {moment(secondDate, "DD-MM-YYYY").format("DD MMM, YYYY")}:</Text>
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
  },
  mainView: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
  textInputStyle: {
    height: 45,
  },
  dateIcon : {
    marginBottom: -0.1,
  }
});
