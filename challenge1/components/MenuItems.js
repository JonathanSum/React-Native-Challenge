import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import schoolData from "../assets/school.json";

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.school_name} />;

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={schoolData}
        keyExtractor={(item) => item.dbn}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
});

export default MenuItems;
