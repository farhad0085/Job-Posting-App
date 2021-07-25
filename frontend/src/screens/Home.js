import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Card from "../components/Card";
import { Grid, Col, Row } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { Title } from "react-native-paper";
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from "../store/actions/postActions";
import { useFocusEffect } from "@react-navigation/native";


const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post)

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadPosts())
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Row>
              <Col>
                <Card
                  onPress={() => navigation.navigate("MedicalJobs")}
                  icon={require("../assets/icons/home/icon_medical.png")}
                  title="Medical Jobs"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("OtherJobs")}
                  icon={require("../assets/icons/home/icon_others.png")}
                  title="Other Jobs"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("GeneralPost")}
                  icon={require("../assets/icons/home/icon_general.png")}
                  title="General"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card
                  onPress={() => navigation.navigate("TipsAndTricks")}
                  icon={require("../assets/icons/home/icon_tips_n_tricks.png")}
                  title="Tips & Tricks"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("NoticeAndInfo")}
                  icon={require("../assets/icons/home/icon_info.png")}
                  title="Notice & Info"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("Favourites")}
                  icon={require("../assets/icons/home/icon_heart.png")}
                  title="Favourites"
                />
              </Col>
            </Row>
            <Row>
              <Title>Latest Updates</Title>
            </Row>
            <Posts loading={post.loading} title="Latest updates" posts={post.posts.results} />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
  },
});
