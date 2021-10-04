import React from "react";
import { Col, Row } from "react-native-paper-grid";
import Post from "./Post";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button, useTheme, Text } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../../store/actions/postActions";

const Posts = ({ loading, posts, hidePagination, next, previous }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          color={theme.colors.loadingIndicator}
          size="small"
        />
      ) : (
        <>
          {!posts.length ? (
            <Text style={styles.noPostText}>
              Nothing found here, please check back again later.
            </Text>
          ) : (
            <>
              {posts.map((post) => (
                <Row key={post.id}>
                  <Post post={post} />
                </Row>
              ))}
            </>
          )}

          {!hidePagination && (
            <Row>
              <Col>
                <Button
                  color={theme.colors.button}
                  mode="contained"
                  onPress={() => dispatch(loadPosts({}, previous))}
                  disabled={!previous}
                >
                  Prev
                </Button>
              </Col>

              <Col>
                <Button
                  color={theme.colors.button}
                  mode="contained"
                  onPress={() => dispatch(loadPosts({}, next))}
                  disabled={!next}
                >
                  Next
                </Button>
              </Col>
            </Row>
          )}
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
  noPostText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 10,
  },
});
