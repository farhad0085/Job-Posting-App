import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Grid } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useTheme } from "react-native-paper";
import HeaderRight from "../components/HeaderRight";
import DeadlineSoonCard from "../components/DeadlineSoonCard";
import { useFocusEffect } from "@react-navigation/native";

const MedicalJobs = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme);

  useFocusEffect(
    React.useCallback(() => {
      _refresh();
    }, [])
  );

  const _refresh = () => {
    dispatch(loadPosts({ category: 1 }));
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
              filterObj={{ category: 1 }}
              subtitle="Medical jobs which deadlines are in next 10 days"
            />
            <Posts loading={post.loading} posts={post.posts.results} />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalJobs;

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
