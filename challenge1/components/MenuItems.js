import React from "react";

import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import schoolData from "../assets/school.json";
import NYCSchoolHeader from "./NYCSchoolHeader";
import NYCSchoolFooter from "./NYCSchoolFooter";
const MenuItems = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item name={item.school_name} id={item.dbn} />
  );
  const Item = ({ name, id }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("Info", {
          itemId: id,
        })
      }
      style={menuStyles.innerContainer}
    >
      <Text style={menuStyles.itemText}>{name}</Text>
    </Pressable>
  );

  return (
    <>
      <View style={menuStyles.container}>
        <FlatList
          data={schoolData}
          keyExtractor={(item) => item.dbn}
          renderItem={renderItem}
        ></FlatList>
      </View>
      <NYCSchoolFooter />
    </>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
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
