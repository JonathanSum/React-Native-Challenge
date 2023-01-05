import * as React from "react";
import { View, StyleSheet } from "react-native";

import NYCSchoolHeader from "./components/NYCSchoolHeader";
import NYCSchoolFooter from "./components/NYCSchoolFooter";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <NYCSchoolHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <NYCSchoolFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
