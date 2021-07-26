import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { getOldFavouritePosts } from "../utils/storage";
import PTRView from "react-native-pull-to-refresh";

const Favourites = ({ navigation }) => {
  const [favouritePosts, setFavouritePosts] = useState([]);

  useEffect(() => {
    setFavouritePosts(getOldFavouritePosts());
    // eslint-disable-next-line
  }, []);

  const _refresh = () => {
    setFavouritePosts(getOldFavouritePosts());
  };

  return (
    <PTRView onRefresh={_refresh} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts posts={favouritePosts} />
          </Grid>
        </View>
      </SafeAreaView>
    </PTRView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
