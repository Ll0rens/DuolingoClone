import React, { useState } from "react";
import {View, Text, Image, TextInput} from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png"
import Button from "../Button";
const OpenEndedQuestion = ({question, onCorrect, onWrong}) => {

    const [input, setInput] = useState('');
    
    const onButtonPress = () => {
        if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect();
        } else {
            onWrong();
        }
        setInput('');
    };

    return (
        <>
            <Text style={styles.title}>OpenEndedQuestion</Text>
            <View style={styles.row}>
                <Image source={mascot} style={styles.mascot} resizeMode="contain"></Image>
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>
            <TextInput
                value={input}
                onChangeText={setInput} //{(changedValue) => setInput(changedValue)}
                placeholder="Type in English"
                style={styles.textInput}
                textAlignVertical="top"
                multiline
            />
            <Button text="Check" onPress={onButtonPress} disabled={false}/>


        </>
    );
};

export default OpenEndedQuestion;