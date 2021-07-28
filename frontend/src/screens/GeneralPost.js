import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import Ionicons from "react-native-vector-icons/Ionicons";

const GeneralPost = ({ navigation }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPosts({ category: 3 }));
  }, []);

  const _refresh = () => {
    dispatch(loadPosts({ category: 3 }));
  };

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => _refresh()}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="reload-circle-sharp"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
    ),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts loading={post.loading} posts={post.posts.results} />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneralPost;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
