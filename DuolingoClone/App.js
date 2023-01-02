import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./App.styles"
import ImageOption from "./src/components/ImageOption";


const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}> Which of these is in the "glass"</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
    </View>
  )
};

export default App;