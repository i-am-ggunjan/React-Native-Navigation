import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stackk = createNativeStackNavigator();

const Stack = () => {
  return (
    <>
      <NavigationContainer>
        <Stackk.Navigator initialRouteName="ABOUT">
          <Stackk.Screen name="HOME" component={HomeScreen} />
          <Stackk.Screen name="ABOUT" component={About} />
        </Stackk.Navigator>
      </NavigationContainer>
    </>
  );
};

function HomeScreen() {
  return (
    <View style={style.contianer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const About = (props) => {
  return (
    <View style={style.contianer}>
      <Text>About Screen</Text>
      <Button
        title="Go To Other Page"
        onPress={() => props.navigation.navigate("HOME")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  contianer: {
    display: "flex",
    alignItems: "center",
  },
});

export default Stack;
