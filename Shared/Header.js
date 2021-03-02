import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
      <Text>Header</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    // backgroundColor: "red",
    // marginTop: 80,
  },
});
