import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Title, Text, useTheme, ActivityIndicator } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import Posts from "../components/Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../store/actions/postActions";
import PostMeta from "../components/Posts/PostMeta";
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { BANNER_AD_UNIT_ID_BELLOW_POST } from "../utils/ads";


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
    <SafeAreaView style={styles.mainView}>
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
                      <BannerAd
                        unitId={BANNER_AD_UNIT_ID_BELLOW_POST}
                        sizes={[BannerAdSize.LEADERBOARD]}
                      />
                      <RenderHtml
                        contentWidth={screenDimension.width - 20} // padding left + right
                        source={{ html: postData?.body }}
                        defaultTextProps={{
                          style: { color: theme.colors.text },
                          selectable: true
                        }}
                      />
                      <BannerAd
                        unitId={BANNER_AD_UNIT_ID_BELLOW_POST}
                        sizes={[BannerAdSize.INLINE_ADAPTIVE_BANNER]}
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
    mainView: {
      display: "flex",
      backgroundColor: theme.colors.background,
      flex: 1,
      padding: 10,
    },
    cardsContainer: {
      display: "flex",
    },
    a: {
      color: theme.colors.primary,
    },
    postMeta: {
      borderBottomWidth: 0.5,
      marginBottom: 10,
      borderBottomColor: theme.colors.text,
    },
    relatedPostTitle: {
      borderBottomWidth: 0.5,
    },
  });
