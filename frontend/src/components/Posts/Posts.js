import React, { useState } from "react";
import { Col, Row } from "react-native-paper-grid";
import Post from "./Post";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import {
  addToFavourite,
  getOldFavouritePosts,
  removeFromFavourite,
  isFavourite,
} from "../../utils/storage";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../../store/actions/postActions";


const Posts = ({ loading, posts }) => {
  const [oldFavouritePosts, setOldFavouritePosts] = useState([]);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleOnFavourite = (post) => {
    if (!isFavourite(oldFavouritePosts, post)) {
      // means items now added
      addToFavourite(post);
      var filtered = [...oldFavouritePosts, post];
      setOldFavouritePosts(filtered);
      showToast("Item added to the favourite list");
    } else {
      removeFromFavourite(post);
      var filtered = oldFavouritePosts.filter((el) => el.id != post.id);
      setOldFavouritePosts(filtered);
      showToast("Item removed from the favourite list");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setOldFavouritePosts(getOldFavouritePosts());
    }, [posts])
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          {posts.map((post) => (
            <Row key={post.id}>
              <Post
                post={post}
                isFavourite={isFavourite(oldFavouritePosts, post)}
                handleOnFavourite={handleOnFavourite}
              />
            </Row>
          ))}

          <Row>
            <Col>
              <Button
                mode="contained"
                onPress={() => dispatch(loadPosts({}, post.posts.previous))}
                disabled={!post.posts.previous}
              >
                Prev
              </Button>
            </Col>

            <Col>
              <Button
                mode="contained"
                onPress={() => dispatch(loadPosts({}, post.posts.next))}
                disabled={!post.posts.next}
              >
                Next
              </Button>
            </Col>
          </Row>
        </>
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postView: {
    backgroundColor: "red",
  },
});
