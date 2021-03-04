import {
  Body,
  Container,
  H1,
  Left,
  ListItem,
  Right,
  Thumbnail,
} from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Text, View, Button } from "react-native";

import { connect } from "react-redux";

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
          {props.cartItems.map((data) => {
            return (
              <ListItem style={styles.listItems} key={Math.random()} avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri: data.product.image
                        ? data.product.image
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                  />
                </Left>
                <Body style={styles.body}>
                  <Left>
                    <Text>{data.product.name}</Text>
                  </Left>
                  <Right>
                    <Text>${data.product.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            );
          })}
          <View style={styles.bottomContainer}>
            <Left>
              <Text style={styles.price}>${total}</Text>
            </Left>
            <Right>
              <Button title="Clear" />
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

export default connect(mapStateToProps, null)(Cart);

const styles = StyleSheet.create({
  emptyConteiner: {
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  listItems: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
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
});
