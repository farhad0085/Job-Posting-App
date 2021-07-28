import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

const MyCard = ({ title, icon, onPress }) => (
  <Card style={styles.cardContainer} onPress={onPress}>
    <View style={styles.cardIcon}>
      {icon()}
    </View>
    <Card.Content>
      <Text style={styles.cardTitle}>{title}</Text>
    </Card.Content>
  </Card>
);

export default MyCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
    display: "flex",
    height: 130,
    elevation: 6,
  },
  cardTitle: {
    textAlign: "center",
    opacity: 0.7,
    fontSize: 14,
    fontWeight: "bold",
  },
  cardIcon: {
    alignSelf: "center"
  },
});
