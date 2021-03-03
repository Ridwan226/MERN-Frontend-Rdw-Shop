import { Body, Content, Left, ListItem, Thumbnail, Text } from "native-base";
import React from "react";
import { StyleSheet, View, Dimensions, LogBox } from "react-native";

var { width } = Dimensions.get("window");

LogBox.ignoreAllLogs(true);

const SearchProduct = (props) => {
  const { productsFiltred } = props;

  return (
    <Content style={{ width: width }}>
      {productsFiltred.length > 0 ? (
        productsFiltred.map((item) => (
          <ListItem
            key={item._id}
            avatar
            onPress={() =>
              props.navigation.navigate("SingelProduct", { item: item })
            }
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.container}>
          <Text style={{ alignSelf: "center" }}>Product Dont Match</Text>
        </View>
      )}
    </Content>
  );
};
export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
