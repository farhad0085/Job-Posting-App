import React from "react";
import { Col, Row } from "react-native-paper-grid";
import Post from "./Post";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../../store/actions/postActions";

const Posts = ({ loading, posts }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          {posts.map((post) => (
            <Row key={post.id}>
              <Post post={post} />
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
