import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";

// Navigation Main
import Main from "./Navigator/Main";

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
