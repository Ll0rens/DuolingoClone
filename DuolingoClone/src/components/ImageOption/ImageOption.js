import React from "react"
import {View, Image, Text } from 'react-native'
import styles from './styles'

const ImageOption = ({image, text}) => (
  <View style={styles.optionContainer}>
    <Image
        source={{
        uri: image
        }}
        style={styles.optionImage}
        resizeMode="contain"
        />
    <Text style={styles.optionText}>{text}</Text>
  </View>
);

  export default ImageOption;