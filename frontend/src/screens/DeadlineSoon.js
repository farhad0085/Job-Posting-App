import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useTheme } from "react-native-paper";
import HeaderRight from "../components/HeaderRight";
import moment from "moment";


const getStyles = theme => StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
  mainView: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
});


const DeadlineSoon = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const theme = useTheme()
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme)

  useEffect(() => {
    _refresh()
  }, []);

  const _refresh = () => {
    const obj = {
      deadline__lte: moment().add(10, 'd').format("YYYY-MM-DD"),
      deadline__gte: moment().format("YYYY-MM-DD"),
      ...route.params.filterObj
    }
    dispatch(loadPosts(obj));
  };

  navigation.setOptions({
    headerRight: () => <HeaderRight onRefresh={_refresh} />
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

export default DeadlineSoon;
