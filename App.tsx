import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
      <Text>Published to Expo and Next</Text>

      <Text style={{ backgroundColor: 'aliceblue', padding: 14, margin: 24, borderRadius: 6}}>{message}</Text>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
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
