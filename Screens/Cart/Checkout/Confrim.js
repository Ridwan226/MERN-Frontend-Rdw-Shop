import {Body, Left, ListItem, Right, Thumbnail} from 'native-base';
import React from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../redux/action/cartAction';

var {height, width} = Dimensions.get('window');

const Confrim = (props) => {
  const confrim = props.route.params;

  const confrimOrder = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate('Cart');
    }, 5000);
  };

  return (
    <ScrollView containContainerStyle={styles.contain}>
      <View style={styles.titeContainer}>
        <Text style={styles.title}>Confrim Order</Text>
      </View>

      {props.route.params ? (
        <View style={{borderWidth: 1, borderColor: 'orange'}}>
          <Text style={styles.shipping}>Shipping To:</Text>
          <View style={{padding: 8}}>
            <Text>Address: {confrim.order.order.shippingAddress1}</Text>
            <Text>Address2: {confrim.order.order.shippingAddress2}</Text>
            <Text>City: {confrim.order.order.city}</Text>
            <Text>Zip: {confrim.order.order.zip}</Text>
            <Text>Contry: {confrim.order.order.country}</Text>
          </View>
          <Text style={styles.shipping}>Items</Text>

          {confrim.order.order.orderItems.map((x) => {
            return (
              <ListItem style={styles.items} key={x.product.name} avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri: x.product.image
                        ? x.product.image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                    }}
                  />
                  <Body style={styles.body}>
                    <Left>
                      <Text>{x.product.name}</Text>
                    </Left>
                    <Right>
                      <Text>${x.product.price}</Text>
                    </Right>
                  </Body>
                </Left>
              </ListItem>
            );
          })}
        </View>
      ) : null}
      <View style={{alignItems: 'center', margin: 20}}>
        <Button title={'place Order'} onPress={confrimOrder} />
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(null, mapDispatchToProps)(Confrim);

const styles = StyleSheet.create({
  contain: {
    height: height,
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  shipping: {
    textAlign: 'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
