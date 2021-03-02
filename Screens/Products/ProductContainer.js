import { Container, Header, Icon, Input, Item } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Banners from "../../Shared/Banners";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
const data = require("../../assets/data/products.json");
const productCategories = require("../../assets/data/categories.json");
var { height } = Dimensions.get("window");
const ProductContainer = () => {
  const [product, setProduct] = useState([]);
  const [productFilters, setProductFilters] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initilState, setInitialState] = useState([]);
  // console.log(categories);
  useEffect(() => {
    setProduct(data);
    setProductFilters(data);
    setFocus(false);
    setCategories(productCategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);
    return () => {
      setProduct([]);
      setProductFilters([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState([]);
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

  const chanegeCategory = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initilState), setActive(true)]
        : [
            setProductsCtg(
              product.filter((i) => i.category._id == ctg),
              setActive(true)
            ),
          ];
    }
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
        <ScrollView>
          <View>
            <View>
              <Banners />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                CategoryFilter={chanegeCategory}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listConteiner}>
                {productsCtg.map((item) => {
                  return <ProductList key={item.id} item={item} />;
                })}
              </View>
            ) : (
              <View style={[styles.center, { height: "40%" }]}>
                <Text>Product Dont Match</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  conteiner: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listConteiner: {
    // height: height,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
