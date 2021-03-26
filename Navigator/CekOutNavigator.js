import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Checkout from '../Screens/Cart/Checkout/Checkout';
import Payment from '../Screens/Cart/Checkout/Payment';
import Confrim from '../Screens/Cart/Checkout/Confrim';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Checkout" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confrim" component={Confrim} />
    </Tab.Navigator>
  );
}

// const CekOutNavigator = () => {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   );
// };

export default function CekOutNavigator() {
  return <MyTabs />;
}

const styles = StyleSheet.create({});
