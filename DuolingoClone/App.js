import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.styles";
import questions from "./assets/data/allQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
import Header from "./src/components/Header"
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    if (lives === 0) {
      Alert.alert("Game Over", "Try again");
      setCurrentQuestionIndex(0);
      setLives(5);
    } else {
      Alert.alert("Wrooooong");
      setLives(lives - 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
    setHasLoaded(true);
  },[]);

  useEffect(() => {
    if (hasLoaded){
      saveData();
    }
  },[lives,currentQuestionIndex,hasLoaded]);

  const saveData = async () => { //should be async because it has an asynchronous with the await
    await AsyncStorage.setItem("keyLives", lives.toString()); //needs the await because it is an asynchronous function
    await AsyncStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('keyLives');
    const loadedIndex = await AsyncStorage.getItem('keyLives');

      if (loadedLives) {
        setLives(parseInt(loadedLives));
      }

      if (loadedIndex) {
        setCurrentQuestionIndex(parseInt(loadedIndex));
      }

  };

  if (!hasLoaded) {
    return(<ActivityIndicator style={styles.activityIndicator}/>);
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives}/>
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" &&
      (<ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong} 
      />) }
      {currentQuestion.type === "OPEN_ENDED" && 
      (<OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong} 
      />) }
    </View>
  )
};

export default App;