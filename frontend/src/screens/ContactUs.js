import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { submitReport } from "../store/actions/reportActions";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  REPORT_SUBMISSION_ERROR,
  REPORT_SUBMITTED,
} from "../store/actions/actionTypes";

const ContactUs = ({ navigation }) => {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.report);
  const theme = useTheme();
  const styles = getStyles(theme)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    dispatch(submitReport({ name, email, description }));
  };

  useEffect(() => {
    if (report.submitted) {
      setName("");
      setEmail("");
      setDescription("");
    }
  }, [report.submitted]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView}>
        <View style={styles.container}>
          <Text>
            If you find any issue while using the app, please let us know. Also
            if you have any suggestions, please feel free to share with us.
          </Text>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Enter your name"
            value={name}
            maxLength={100}
            onChangeText={(text) => setName(text)}
            right={<TextInput.Affix text={`${name.length}/100`} />}
          />
          <TextInput
            placeholderTextColor={theme.colors.placeholderTextColor}
            outlineColor={theme.colors.placeholderTextColor}
            mode="outlined"
            placeholder="Enter your email"
            label="Email"
            maxLength={100}
            value={email}
            onChangeText={(text) => setEmail(text)}
            right={<TextInput.Affix text={`${email.length}/100`} />}
          />
          <TextInput
            placeholderTextColor={theme.colors.placeholderTextColor}
            outlineColor={theme.colors.placeholderTextColor}
            mode="outlined"
            numberOfLines={15}
            label="Description"
            placeholder="Enter your report details here..."
            multiline
            style={styles.textArea}
            maxLength={5000}
            value={description}
            onChangeText={(text) => setDescription(text)}
            right={<TextInput.Affix text={`${description.length}/5000`} />}
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
            confirmButtonColor={theme.colors.primary}
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

export default ContactUs;

const getStyles = theme => StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0,
  },
  submitButton: {
    marginTop: 6,
  },
  mainView: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
});
