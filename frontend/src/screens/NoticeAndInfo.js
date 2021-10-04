import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useTheme } from "react-native-paper";
import HeaderRight from "../components/HeaderRight";

const NoticeAndInfo = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme);

  useEffect(() => {
    _refresh();
  }, []);

  const _refresh = () => {
    dispatch(loadPosts({ category: 5 }, null, "noticeAndInfo"));
  };

  navigation.setOptions({
    headerRight: () => <HeaderRight onRefresh={_refresh} />,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Posts
              next={post.noticeAndInfo?.next}
              previous={post.noticeAndInfo?.previous}
              loading={post.loading}
              posts={post.noticeAndInfo?.results || []}
            />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeAndInfo;

const getStyles = (theme) =>
  StyleSheet.create({
    cardsContainer: {
      display: "flex",
    },
    mainView: {
      display: "flex",
      backgroundColor: theme.colors.background,
    },
  });
