import React from "react"
import {Image, Text, Pressable} from 'react-native'
import styles from './styles'
import PropTypes from "prop-types"

const ImageOption = ({image, text, isSelected, onPress}) => (
  <Pressable
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
      <Image
        source={{
        uri: image
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
  </Pressable>
);

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

//If no parameter is send, the Default value of text will be "Default"
ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {}
};

export default ImageOption;