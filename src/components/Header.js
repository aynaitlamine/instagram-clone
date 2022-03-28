import { StyleSheet, View } from "react-native";
import React from "react";
import {
  CameraIcon,
  IgtvIcon,
  InstagramIcon,
  MessengerIcon,
  OvalIcon,
} from "../assets/icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <CameraIcon style={styles.cameraIcon} />
        <InstagramIcon style={styles.instagramIcon} />
        <IgtvIcon style={styles.igtvIcon} />
        <OvalIcon style={styles.ovalIcon} />
        <MessengerIcon style={styles.messengerIcon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FAFAFA",
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 0.6,
    borderBottomColor: "#DDD",
    paddingVertical: 5
  },
  row: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
  },
  cameraIcon: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  igtvIcon: {
    position: "absolute",
    top: 0,
    right: 10,
    marginRight: 40,
  },
  messengerIcon: {
    position: "absolute",
    top: 2,
    right: 10,
  },
  ovalIcon: {
    position: "absolute",
    top: 2,
    right: 49,
  },
  instagramIcon:{
    position: "absolute",
    top: 0,
  }
});
