import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabb = createMaterialTopTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
        <Tabb.Navigator>
          <Tabb.Screen name="HOME" component={HomeScreen} />
          <Tabb.Screen name="ABOUT" component={About} />
        </Tabb.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen() {
  return (
    <View style={style.contianer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const About = () => {
  return (
    <View style={style.contianer}>
      <Text>About Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  contianer: {
    display: "flex",
    alignItems: "center",
  },
});

export default Tab;
