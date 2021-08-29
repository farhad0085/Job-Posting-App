import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";

const MedicalJobs = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme()
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme)

  useEffect(() => {
    dispatch(loadPosts({ category: 1 }));
  }, []);

  const _refresh = () => {
    dispatch(loadPosts({ category: 1 }));
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
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
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

const getStyles = theme => StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
  mainView: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
});
