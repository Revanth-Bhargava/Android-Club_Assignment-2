import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
       <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;