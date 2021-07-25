import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { getOldFavouritePosts } from "../utils/storage";

const Favourites = ({ navigation }) => {
  const [favouritePosts, setFavouritePosts] = useState([]);

  useEffect(() => {
    setFavouritePosts(getOldFavouritePosts());
    // eslint-disable-next-line
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts posts={favouritePosts} />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});