import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductContainer from "../Screens/Products/ProductContainer";
import SingelProduct from "../Screens/Products/SingelProduct";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductContainer"
        component={ProductContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingelProduct"
        component={SingelProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <MyStack />;
}
