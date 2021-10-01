import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Row } from "react-native-paper-grid";
import { Text, useTheme } from "react-native-paper";
import Anticons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/core";

const DeadlineSoonCard = ({ filterObj, subtitle }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  return (
    <Row>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("DeadlineSoon", { filterObj: filterObj })
        }
      >
        <View style={styles.iconSection}>
          <Anticons size={48} color={theme.colors.icon} name="calculator" />
        </View>
        <View style={styles.bodySection}>
          <View style={styles.content}>
            <Text style={styles.title}>Deadline Soon...</Text>
            <Text style={styles.subtitle}>
              {subtitle || "Jobs which deadlines are in next 10 days"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Row>
  );
};

export default DeadlineSoonCard;

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 6,
      padding: 5,
      borderStyle: "solid",
      borderWidth: 0,
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.card.colors.background,
      elevation: 6,
    },
    content: {
      paddingBottom: 5,
    },
    title: {
      fontSize: 22,
      color: theme.card.colors.text,
    },
    subtitle: {
      color: theme.card.colors.text,
    },
    iconSection: {
      flex: 0.15,
      marginRight: 4,
      alignSelf: "center",
      borderRadius: 5,
    },
    bodySection: {
      flex: 0.85,
    },
  });
