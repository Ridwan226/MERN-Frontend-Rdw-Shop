import React, {useState} from 'react';
import {StyleSheet, View, Buttont, Button} from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right,
  Text,
  Left,
  Picker,
  Icon,
  Body,
  Title,
} from 'native-base';

const methods = [
  {name: 'Cash On Delivery', value: 1},
  {name: 'Bank Transfer', value: 2},
  {name: 'Card Payment', value: 3},
];

const paymentCards = [
  {name: 'Walet', value: 1},
  {name: 'Visa', value: 2},
  {name: 'Master Card', value: 3},
  {name: 'Other', value: 4},
];

const Payment = (props) => {
  const order = props.route.params;
  // console.log('Data Routes', order);
  const [select, setSelect] = useState();
  const [card, setCard] = useState();

  return (
    <Container>
      <Header>
        <Body>
          <Title>Chouse your payment methods</Title>
        </Body>
      </Header>
      <Content>
        {methods.map((item, index) => {
          return (
            <ListItem key={item.name} onPress={() => setSelect(item.value)}>
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
                <Radio selected={select == item.value} />
              </Right>
            </ListItem>
          );
        })}

        {select === 3 ? (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name={'arrow-down'} />}
            headerStyle={{backgroundColor: 'orange'}}
            headerBackButtonTextStyle={{color: '#fff'}}
            headerTitleStyle={{color: '#fff'}}
            selectedValue={card}
            onValueChange={(x) => setCard(x)}>
            {paymentCards.map((c, index) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null}

        <View style={{marginTop: 60, alignSelf: 'center'}}>
          <Button
            title="Confrim"
            onPress={() => props.navigation.navigate('Confrim', {order})}
          />
        </View>
      </Content>
    </Container>
  );
};

export default Payment;

const styles = StyleSheet.create({});
