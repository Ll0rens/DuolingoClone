import React from "react"
import {Image, Text, View} from 'react-native'
import styles from './styles';
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import heart from "../../../assets/images/heart.png"

const Header = ({progress, lives}) => (
    <View style={styles.root}>
        <ProgressBar progress={progress} />
        <Image style={styles.icon} source={heart} resizeMode="contain"></Image>
        <Text style={styles.lives}>{lives}</Text>
    </View>
);

export default Header;