import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import { Grid, Col, Row } from "react-native-paper-grid";
import Posts from "../components/Posts/Posts";
import { Title, Text, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { useFocusEffect } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderRight from "../components/HeaderRight";
import DeadlineSoonCard from "../components/DeadlineSoonCard";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const post = useSelector((state) => state.post);
  const styles = getStyles(theme);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadPosts());
    }, [])
  );

  const _refresh = () => {
    dispatch(loadPosts());
  };

  navigation.setOptions({
    headerRight: () => <HeaderRight onRefresh={_refresh} />,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Grid>
            <Row>
              <Col>
                <Card
                  onPress={() => navigation.navigate("MedicalJobs")}
                  icon={() => (
                    <MaterialIcons
                      size={72}
                      color={theme.colors.icon}
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
                      color={theme.colors.icon}
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
                    <MaterialIcons
                      size={72}
                      color={theme.colors.icon}
                      name="lightbulb"
                    />
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
                    <MaterialIcons
                      size={72}
                      color={theme.colors.icon}
                      name="cases"
                    />
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
                      color={theme.colors.icon}
                      name="info-circle"
                    />
                  )}
                  title="Notice & Info"
                />
              </Col>
              <Col>
                <Card
                  onPress={() => navigation.navigate("AgeCalculator")}
                  icon={() => (
                    <Ionicons
                      size={72}
                      color={theme.colors.icon}
                      name="calculator"
                    />
                  )}
                  title="Age Calculator"
                />
              </Col>
            </Row>
            <Row>
              <Title>Latest updates</Title>
            </Row>
            <DeadlineSoonCard filterObj={{}} />
            <Posts
              loading={post.loading}
              title="Latest updates"
              posts={post.posts.results}
            />
          </Grid>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const getStyles = (theme) =>
  StyleSheet.create({
    cardsContainer: {
      display: "flex",
      backgroundColor: theme.colors.background,
    },
    mainView: {
      display: "flex",
      backgroundColor: theme.colors.background,
    },
  });
