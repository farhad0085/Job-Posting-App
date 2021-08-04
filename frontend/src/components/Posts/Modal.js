import React from "react";
import {
  Modal as ReactModal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import {Button} from 'react-native-paper'

const Modal = ({ post, modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <ReactModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Total Views: {post?.post_view?.total_views || 0}
            </Text>
            <Text style={styles.modalText}>
              Unique Views: {post?.post_view?.unique_views || 0}
            </Text>
            <Text style={styles.modalText}>
              Views by me: {post?.post_view?.views_by_me || 0}
            </Text>
            <Button
              mode="contained"
              color="red"
              onPress={() => setModalVisible(!modalVisible)}
            >
              Close
            </Button>
          </View>
        </View>
      </ReactModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  modalText: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "rgb(115, 115, 115)"
  },
});

export default Modal;
