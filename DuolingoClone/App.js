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

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  };

  const onWrong = () => {
    Alert.alert("Wrooooong")
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
      <Header progress={currentQuestionIndex / questions.length}/>
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