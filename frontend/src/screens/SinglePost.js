import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Title, useTheme, ActivityIndicator } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../store/actions/postActions";
import PostMeta from "../components/Posts/PostMeta";


const SinglePost = ({ route }) => {
  const postObj = route.params.post;
  const theme = useTheme();
  const screenDimension = useWindowDimensions();
  const styles = getStyles(theme);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const postData = post.singlePost?.postData?.post;

  useEffect(() => {
    dispatch(loadPost(postObj.id));
  }, [postObj.id]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {post.singlePost.loading ? (
          <ActivityIndicator style={{ marginTop: 10 }} size="small" />
        ) : (
          <>
            {post.singlePost.error ? (
              <Text
                style={{
                  textAlign: "center",
                  color: "red",
                  margin: 10,
                  fontSize: 16,
                }}
              >
                Something went wrong.
              </Text>
            ) : (
              <View style={styles.cardsContainer}>
                {postData && (
                  <>
                    <View style={styles.postMeta}>
                      <Title>{postData?.title}</Title>
                      <PostMeta post={postData} />
                    </View>
                    <View>
                        <RenderHtml
                          defaultTextProps={{ selectable: true }}
                          contentWidth={screenDimension.width - 20} // padding left + right
                          source={{ html: postData?.body }}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Title style={styles.relatedPostTitle}>
                        You may also like
                      </Title>
                      <Posts
                        hidePagination={true}
                        posts={post.singlePost?.postData?.related_posts || []}
                      />
                    </View>
                  </>
                )}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SinglePost;

const getStyles = (theme) =>
  StyleSheet.create({
    cardsContainer: {
      display: "flex",
    },
    a: {
      color: theme.colors.primary,
    },
    postMeta: {
      borderBottomWidth: 0.5,
      marginBottom: 10,
    },
    relatedPostTitle: {
      borderBottomWidth: 0.5,
    },
  });
