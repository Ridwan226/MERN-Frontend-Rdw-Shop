import {
  Body,
  Container,
  H1,
  Left,
  ListItem,
  Right,
  Thumbnail,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../redux/action/cartAction";

import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });
  console.log(props.cartItems);

  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          <SwipeListView
            data={props.cartItems}
            renderItem={(data) => <CartItem item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={`white`} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />

          <View style={styles.bottomContainer}>
            <Left>
              <Text style={styles.price}>${total}</Text>
            </Left>
            <Right>
              <Button title="Clear" onPress={() => props.clearCart()} />
            </Right>
            <Right>
              <Button title="cekOut" onPress={() => {}} />
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyConteiner}>
          <Text>Look Like Cart isEmpty</Text>
          <Text>Add Product Next GetStarted</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  emptyConteiner: {
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: "red",
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
    height: 70,
    width: width / 1.2,
  },
});
