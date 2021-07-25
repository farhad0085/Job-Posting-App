import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const MyCard = ({ title, icon, onPress }) => (
  <Card style={styles.cardContainer} onPress={onPress}>
    <Card.Cover style={styles.cardIcon} source={icon} />
    <Card.Content>
      <Text style={styles.cardTitle}>{title}</Text>
    </Card.Content>
  </Card>
);

export default MyCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
    maxHeight: 130,
  },
  cardTitle: {
    alignSelf: "center",
    opacity: 0.7,
    fontSize: 14,
    fontWeight: "bold",
  },
  cardIcon: {
    maxHeight: 100,
  },
});
