import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { submitReport } from "../store/actions/reportActions";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  REPORT_SUBMISSION_ERROR,
  REPORT_SUBMITTED,
} from "../store/actions/actionTypes";

const ReportProblem = ({ navigation }) => {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.report);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    dispatch(submitReport({ name, email, description }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
            right={<TextInput.Affix text="/100" />}
          />
          <TextInput
            mode="outlined"
            placeholder="Enter your email"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            numberOfLines={15}
            label="Description"
            placeholder="Enter your report details here..."
            multiline
            style={styles.textArea}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Button
            loading={report.loading}
            disabled={report.loading}
            style={styles.submitButton}
            mode="contained"
            onPress={submitHandler}
          >
            Submit
          </Button>
        </View>

        {report.submitted && (
          <AwesomeAlert
            show={true}
            showProgress={false}
            title="Thank you!"
            message="We've received your report, we'll contact with you as soon as possible regarding the problem. Thank you!"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OKAY"
            confirmButtonColor="green"
            onConfirmPressed={() =>
              dispatch({
                type: REPORT_SUBMITTED,
                payload: false,
              })
            }
          />
        )}
        {!!report.error && (
          <AwesomeAlert
            show={true}
            showProgress={false}
            title="Something went wrong!"
            message="Failed to submit your report. Please try again!"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OKAY"
            confirmButtonColor="red"
            onConfirmPressed={() =>
              dispatch({
                type: REPORT_SUBMISSION_ERROR,
                payload: "",
              })
            }
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportProblem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0,
  },
  submitButton: {
    marginTop: 6,
  },
});