import React, {useEffect} from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";

const MedicalJobs = ({ navigation }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPosts({ category: 1 }));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts loading={post.loading} posts={post.posts.results} />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalJobs;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
