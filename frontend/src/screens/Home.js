import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Card from "../components/Card";
import { Grid, Col, Row } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { Title, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useFocusEffect } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PTRView from "react-native-pull-to-refresh";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme()
  const post = useSelector((state) => state.post);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadPosts());
    }, [])
  );

  const _refresh = () => {
    dispatch(loadPosts());
  };

  return (
    <PTRView onRefresh={_refresh} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Row>
              <Col>
                <Card
                  onPress={() => navigation.navigate("MedicalJobs")}
                  icon={() => (
                    <MaterialIcons
                      size={72}
                      color={theme.colors.primary}
                      name="medical-services"
                    />
                  )}
                  title="Medical Jobs"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("OtherJobs")}
                  icon={() => (
                    <MaterialCommunityIcons
                      size={72}
                      color={theme.colors.primary}
                      name="briefcase-account"
                    />
                  )}
                  title="Other Jobs"
                />
              </Col>

              <Col>
                <Card
                  onPress={() => navigation.navigate("TipsAndTricks")}
                  icon={() => (
                    <MaterialIcons size={72} color={theme.colors.primary} name="lightbulb" />
                  )}
                  title="Tips & Tricks"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card
                  onPress={() => navigation.navigate("GeneralPost")}
                  icon={() => (
                    <MaterialIcons size={72} color={theme.colors.primary} name="cases" />
                  )}
                  title="General"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("NoticeAndInfo")}
                  icon={() => (
                    <FontAwesomeIcon
                      size={72}
                      color={theme.colors.primary}
                      name="info-circle"
                    />
                  )}
                  title="Notice & Info"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("Favourites")}
                  icon={() => (
                    <FontAwesomeIcon size={72} color={theme.colors.primary} name="heart" />
                  )}
                  title="Favourites"
                />
              </Col>
            </Row>
            <Row>
              <Title>Latest Updates</Title>
            </Row>
            <Posts
              loading={post.loading}
              title="Latest updates"
              posts={post.posts.results}
            />
          </Grid>
        </View>
      </SafeAreaView>
    </PTRView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
