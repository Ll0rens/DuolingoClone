import React from "react"
import {Image, Text, Pressable, View} from 'react-native'
import styles from './styles';
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";

const Header = ({progress}) => (
    <View style={styles.root}>
        <ProgressBar progress={progress} />
    </View>

);


export default Header;