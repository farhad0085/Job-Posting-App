import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import PostMeta from "./PostMeta";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("SinglePost", { title: post.title, post: post })
      }
    >
      <View style={styles.postIdSection}>
        <Text style={styles.postId}>{post.id}</Text>
      </View>
      <View style={styles.postDetailsSection}>
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{post.title}</Text>
          {post.deadline && (
            <Text style={styles.deadlineText}>
              Deadline: {moment(post.deadline).format("DD MMM, YYYY")}
            </Text>
          )}
        </View>
        <PostMeta post={post} />
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 6,
      padding: 5,
      borderStyle: "solid",
      borderWidth: 0,
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.card.colors.background,
      elevation: 6,
    },
    postContent: {
      paddingBottom: 5,
      borderBottomWidth: 0.5,
    },
    deadlineText: {
      color: "rgb(209, 87, 87)",
      fontWeight: "bold",
    },
    postId: {
      fontSize: 22,
      fontWeight: "bold",
      color: theme.colors.primary,
      textAlign: "center",
    },
    postTitle: {
      color: theme.card.colors.text

    },
    postIdSection: {
      flex: 0.15,
      marginRight: 4,
      alignSelf: "center",
      borderRadius: 5,
    },
    postDetailsSection: {
      flex: 0.85,
    },
  });
