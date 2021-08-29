import * as React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";

const MyCard = ({ title, icon, onPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme)

  return (
    <Card style={styles.cardContainer}>
      <TouchableHighlight
        underlayColor={"#ddd"}
        onPress={onPress}
        style={{ height: "100%", borderRadius: 5 }}
      >
        <>
          <View style={styles.cardIcon}>{icon()}</View>
          <Card.Content>
            <Text style={styles.cardTitle}>{title}</Text>
          </Card.Content>
        </>
      </TouchableHighlight>
    </Card>
  );
};

export default MyCard;

const getStyles = (theme) =>
  StyleSheet.create({
    cardContainer: {
      display: "flex",
      height: 130,
      elevation: 6,
      backgroundColor: theme.card.colors.background
    },
    cardTitle: {
      textAlign: "center",
      opacity: 0.7,
      fontSize: 14,
      fontWeight: "bold",
    },
    cardIcon: {
      alignSelf: "center",
    },
  });
