import React from "react"
import {View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from "prop-types"

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

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

//If no parameter is send, the Default value of text will be "Default"
ImageOption.defaultProps = {
  text: "Default",
};

export default ImageOption;