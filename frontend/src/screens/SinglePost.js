import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Grid } from "react-native-paper-grid";
import { Title, useTheme } from "react-native-paper";
import moment from "moment";
import RenderHtml from "react-native-render-html";

const SinglePost = ({ navigation, route }) => {
  const post = route.params.post;
  const theme = useTheme();
  const screenDimension = useWindowDimensions();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <View style={styles.postMeta}>
              <Title>{post.title}</Title>
              <Text>Last updated: {moment(post.updated_at).fromNow()}</Text>
            </View>
            <View>
              <RenderHtml
                contentWidth={screenDimension.width}
                source={{ html: post.body }}
              />
            </View>
          </Grid>
        </View>
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
  });
