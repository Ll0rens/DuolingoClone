import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import styles from "./App.styles";
//import questions from "./assets/data/imageMulatipleChoiceQuestions";
//import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
import Header from "./src/components/Header"

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5)

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
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
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex]);

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