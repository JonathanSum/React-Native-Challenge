import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import satData from "../assets/sat.json";
import { useState, useEffect } from "react";
const Information = ({ route, navigation }) => {
  /* 2. Get the param */
  const { itemId } = route.params;

  const [sat, setSat] = useState({
    school_name: null,
    sat_reading: null,
    sat_math: null,
    sat_writing: null,
  });
  const foundSAT = satData.filter((school) => {
    return school.dbn === itemId;
  });
  useEffect(() => {
    if (foundSAT.length !== 0) {
      setSat((prevState) => {
        return {
          ...prevState,
          school_name: foundSAT[0].school_name,
          sat_reading: foundSAT[0].sat_critical_reading_avg_score,
          sat_math: foundSAT[0].sat_math_avg_score,
          sat_writing: foundSAT[0].sat_writing_avg_score,
        };
      });
    }
  }, []);
  const noRecord = <Text style={[InfoStyles.itemText]}>No Record</Text>;
  return foundSAT.length === 0 ? (
    <View
      style={[
        InfoStyles.container,
        {
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      noRecord
    </View>
  ) : (
    <View style={InfoStyles.container}>
      <View style={InfoStyles.innerContainer}>
        <Text style={InfoStyles.itemText}>School: </Text>
        {sat.school_name !== undefined ? (
          <Text style={InfoStyles.itemText}>{sat.school_name}</Text>
        ) : (
          noRecord
        )}
      </View>
      <View style={InfoStyles.innerContainer}>
        <Text style={InfoStyles.itemText}>Reading SAT score: </Text>
        {sat.sat_reading !== undefined ? (
          <Text style={InfoStyles.itemText}>{sat.sat_reading}</Text>
        ) : (
          noRecord
        )}
      </View>
      <View style={InfoStyles.innerContainer}>
        <Text style={InfoStyles.itemText}>Math SAT score: </Text>
        {sat.sat_math !== undefined ? (
          <Text style={InfoStyles.itemText}>{sat.sat_math}</Text>
        ) : (
          noRecord
        )}
      </View>
      <View style={InfoStyles.innerContainer}>
        <Text style={InfoStyles.itemText}>Writing SAT score: </Text>
        {sat.sat_writing !== undefined ? (
          <Text style={InfoStyles.itemText}>{sat.sat_writing}</Text>
        ) : (
          noRecord
        )}
      </View>
    </View>
  );
};
const InfoStyles = StyleSheet.create({
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
    padding: 5,
  },
});
export default Information;
