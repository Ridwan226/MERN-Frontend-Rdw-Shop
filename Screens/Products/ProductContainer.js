import { Container, Header, Icon, Input, Item } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Banners from "../../Shared/Banners";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [product, setProduct] = useState([]);
  const [productFilters, setProductFilters] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProduct(data);
    setProductFilters(data);
    setFocus(false);
    return () => {
      setProduct([]);
      setProductFilters([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductFilters(
      product.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchProduct productsFiltred={productFilters} />
      ) : (
        <View style={styles.conteiner}>
          <View>
            <Banners />
          </View>
          <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
            <FlatList
              // horizontal
              numColumns={2}
              data={product}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      )}
    </Container>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  // conteiner: {
  //   flexWrap: "wrap",
  //   backgroundColor: "gainsboro",
  // },
});
