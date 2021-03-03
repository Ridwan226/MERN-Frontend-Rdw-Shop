import { Container } from "native-base";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const SingelProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [avalibility, setAvalibility] = useState("");
  // console.log(item);
  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SingelProduct;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
});
