import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import PTRView from "react-native-pull-to-refresh";

const NoticeAndInfo = ({ navigation }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPosts({ category: 5 }));
  }, []);

  const _refresh = () => {
    dispatch(loadPosts({ category: 5 }));
  };

  return (
    <PTRView onRefresh={_refresh} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts loading={post.loading} posts={post.posts.results} />
          </Grid>
        </View>
      </SafeAreaView>
    </PTRView>
  );
};

export default NoticeAndInfo;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
