import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Grid } from "react-native-paper-grid";
import { Title } from "react-native-paper";
import HTMLView from "react-native-htmlview";
import moment from "moment";

const window = Dimensions.get("window");

const SinglePost = ({ navigation, route }) => {
  const post = route.params.post;

  function renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == "img") {
      const { src, height } = node.attribs;

      return (
        <Image
          key={index}
          resizeMode="contain"
          style={styles.image}
          source={{ uri: src }}
        />
      );
    }
  }

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
              <HTMLView
                value={post.body}
                stylesheet={styles}
                paragraphBreak={null}
                lineBreak={null}
                renderNode={renderNode}
              />
            </View>
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
  a: {
    color: "green",
  },
  postMeta: {
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: window.width,
    height: 300,
  },
});
