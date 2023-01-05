import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NYCSchoolHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Coding Challenge: NYC Schools</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
