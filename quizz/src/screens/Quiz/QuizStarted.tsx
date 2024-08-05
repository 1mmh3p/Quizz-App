import React, { useState, useRef, useEffect, Fragment } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Difficulty, getQuizQuestions, QuestionState } from "../../utils/utils";
import { Icon } from "react-native-elements";
import Button from "../../component/Button";
import Question from "../../component/Question";
import Answers from "../../component/Answers";
import { ProgressBar } from "react-native-paper";
import colors from "../../utils/colors";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function QuizStarted({ route, navigation }: any) {
  const difficulty = route.params.difficulty;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(15);
  const [number, setNumber] = useState(0);
  const setAnswers = useRef(null);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await getQuizQuestions(
      TOTAL_QUESTIONS,
      // @ts-ignore
      Difficulty[difficulty]
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = () => {
    if (!gameOver) {
      const answer = setAnswers.current;

      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        questions: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      // setUserAnswers((prev) => [...prev, answerObject]);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
      return navigation.navigate("QuizRecords", { score: score });
    } else {
      setNumber(nextQ);
    }
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        padding: 0,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1, padding: 20 }}>
        {!loading ? (
          <Fragment>
            <View
              style={{
                flexDirection: "row",
                marginTop: 0,
                justifyContent: "space-between",
              }}
            >
<Text style={{ fontSize: 16 }}>questions</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#006996",
                }}
              >
                {number + 1}/{questions.length}
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#006996",
                }}
              >
                Score : {score}
              </Text>
            </View>
            {questions.length > 0 ? (
              <>
                <Question
                  questionNr={number + 1}
                  question={(questions[number].question)}
                />
                <Answers
                  answers={questions[number].answers}
                  {...{ setAnswers, checkAnswer }}
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    width: Dimensions.get("window").width,
                    alignSelf: "center",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <ProgressBar 
                  progress={(number + 1) / questions.length}
                 color={colors.blue} />
                </View>
              </>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="large" color="#006996" />
              </View>
            )}
          </Fragment>
        ) : null}
      </View>
      {/* <View
        style={{
          padding: 20,
          backgroundColor: "#006996",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 50,
          height: 50,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <>
          {!gameOver && !loading && number != TOTAL_QUESTIONS - 1 ? (
            <TouchableWithoutFeedback onPress={() => nextQuestion()}>
              <Icon type="entypo" name="plus" color="white" size={10} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => startQuiz()}>
              <Icon type="entypo" name="user" color="white" size={10} />
            </TouchableWithoutFeedback>
          )}
        </>
      </View> */}
    </View>
  );
}

export default QuizStarted;
