import React, {Fragment} from "react";
import { Col, Row } from "react-native-paper-grid";
import Post from "./Post";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button, useTheme, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loadPosts } from "../../store/actions/postActions";
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { BANNER_AD_UNIT_ID_BETWEEN_POST } from "../../utils/ads";
import { createUUID } from "../../utils";

const Posts = ({ loading, posts, hidePagination, next, previous, whereTo }) => {
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
              {posts.map((post, index) => (
                <Fragment key={createUUID()}>
                  {(index % 5) === 0 ? (
                    <>
                      <BannerAd
                        unitId={BANNER_AD_UNIT_ID_BETWEEN_POST}
                        sizes={[BannerAdSize.ANCHORED_ADAPTIVE_BANNER]}
                      />
                      <Row key={post.id}>
                        <Post post={post} />
                      </Row>
                    </>
                  ) : (
                    <Row key={post.id}>
                      <Post post={post} />
                    </Row>
                  )}
                </Fragment>
              ))}
            </>
          )}

          {!hidePagination && (
            <Row>
              <Col>
                <Button
                  color={theme.colors.button}
                  mode="contained"
                  onPress={() => dispatch(loadPosts({}, previous, whereTo))}
                  disabled={!previous}
                >
                  Prev
                </Button>
              </Col>

              <Col>
                <Button
                  color={theme.colors.button}
                  mode="contained"
                  onPress={() => dispatch(loadPosts({}, next, whereTo))}
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
