import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export const App = () => {
  const [message, setMessage] = useState("Loading");

  axios
    .get("/api/")
    .then(({ data }) => {
      setMessage(data);
    })
    .catch(err => {
      setMessage("Api not workign.");
    });

  return (
    <View style={styles.container}>
      <Text>Zeit now & expo (React Native) Template!</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
