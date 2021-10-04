import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useTheme } from "react-native-paper";
import HeaderRight from "../components/HeaderRight";
import DeadlineSoonCard from "../components/DeadlineSoonCard";
import { useFocusEffect } from "@react-navigation/native";

const OtherJobs = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme);

  useEffect(() => {
    _refresh();
  }, []);

  const _refresh = () => {
    dispatch(loadPosts({ category: 2 }, null, "otherJobs"));
  };

  navigation.setOptions({
    headerRight: () => <HeaderRight onRefresh={_refresh} />,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <DeadlineSoonCard
              filterObj={{ category: 2 }}
              subtitle="Other jobs which deadlines are in next 10 days"
            />
            <Posts
              next={post.otherJobs?.next}
              previous={post.otherJobs?.previous}
              loading={post.loading}
              posts={post.otherJobs?.results || []}
            />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtherJobs;

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
