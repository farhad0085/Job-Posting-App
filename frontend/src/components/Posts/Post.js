import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const Post = ({ post, isFavourite, handleOnFavourite }) => {
  const navigation = useNavigation();

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
          <Text>{post.title}</Text>
          {post.deadline && <Text style={styles.deadlineText}>Deadline: {moment(post.deadline).format("DD MMM, YYYY")}</Text>}
        </View>
        <View style={styles.postMeta}>
          <Text>Last updated: {moment(post.updated_at).fromNow()}</Text>

          <TouchableOpacity
            onPress={() => handleOnFavourite(post)}
            style={styles.favIcon}
          >
            {isFavourite ? (
              <FontAwesomeIcon size={24} color={"green"} name="heart" />
              ) : (
              <FontAwesomeIcon size={24} color={"green"} name="heart-o" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 6,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 6
  },
  postContent: {
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  deadlineText: {
    color: "rgb(209, 87, 87)",
    fontWeight: "bold"
  },
  postMeta: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  favIcon: {
    marginLeft: "auto",
    width: 30,
    height: 25,
  },
  postId: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
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
