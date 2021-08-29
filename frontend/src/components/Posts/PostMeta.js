import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Modal from "./Modal";
import { useTheme } from "react-native-paper";

const PostMeta = ({ post }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.postMeta}>
      <View style={styles.postUpdateTime}>
        <Text style={styles.text}>Last updated: {moment(post.updated_at).fromNow()}</Text>
      </View>
      <View style={styles.postViewIcon}>
        <TouchableOpacity
          style={styles.postViewIcon}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesomeIcon size={16} color={theme.colors.primary} name="eye" />
          <Text style={{ marginLeft: 4, ...styles.text }}>{post.post_view.total_views}</Text>
        </TouchableOpacity>
        {modalVisible && (
          <Modal
            post={post}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
      </View>
    </View>
  );
};

export default PostMeta;

const getStyles = (theme) => StyleSheet.create({
  postMeta: {
    paddingTop: 5,
    paddingBottom: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postUpdateTime: {
    alignItems: "flex-start",
  },
  text: {
    color: "rgb(108, 108, 108)",
  },
  postViewIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
