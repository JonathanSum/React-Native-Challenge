import * as React from "react";
import { View, StyleSheet } from "react-native";
import NYCSchoolHeader from "./components/NYCSchoolHeader";
import NYCSchoolFooter from "./components/NYCSchoolFooter";
import MenuItems from "./components/MenuItems";
import Information from "./components/Information";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#EE9972",
    card: "#EE9972",
    text: "black",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="School">
            <Stack.Screen
              name="School"
              component={MenuItems}
              options={{
                headerStyle: {
                  backgroundColor: "#EE9972",
                },
                headerTitle: (props) => <NYCSchoolHeader {...props} />,
              }}
            />
            <Stack.Screen name="Info" component={Information} />
          </Stack.Navigator>
          {/* <MenuItems /> */}
        </View>
        <View style={styles.footerContainer}></View>
      </NavigationContainer>
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
