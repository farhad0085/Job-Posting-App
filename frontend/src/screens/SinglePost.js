import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ToastAndroid,
} from "react-native";
import { Title, useTheme, ActivityIndicator } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../store/actions/postActions";
import PostMeta from "../components/Posts/PostMeta";
import ContextMenuReact from "react-native-context-menu-view";
import Clipboard from '@react-native-clipboard/clipboard';


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

  const copyToClipboard = () => {
    Clipboard.setString(postData?.body.replace(/<[^>]+>/g, ''));
    ToastAndroid.show("Text copied to clipboard", ToastAndroid.SHORT)
  };

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
                      <ContextMenuReact
                        actions={[
                          {
                            title: "Copy",
                            disabled: false
                          },
                        ]}
                        onPress={copyToClipboard}
                      >
                        <RenderHtml
                          defaultViewProps={{ selectable: true }}
                          contentWidth={screenDimension.width}
                          source={{ html: postData?.body }}
                        />
                      </ContextMenuReact>
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
